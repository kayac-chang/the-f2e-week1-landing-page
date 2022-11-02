import {
  ComponentProps,
  isValidElement,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createContext } from "react";
import { deepForEach } from "react-children-utilities";
import invariant from "tiny-invariant";

interface State {
  currentActive: string;
  setCurrentActive: (currentActive: string) => void;
}

const Context = createContext<State | null>(null);

function useTabsContext(error: string) {
  const context = useContext(Context);
  invariant(context, error);
  return context;
}

type RootProps = ComponentProps<"div">;
function Root(props: RootProps) {
  const [currentActive, setCurrentActive] = useState(() => {
    let value: string | undefined;

    deepForEach(props.children, (item) => {
      // keep only Tab Element
      if (!(isValidElement(item) && item.type === Tab)) {
        return;
      }

      // get first value only
      if (!value) {
        value = item.props.value;
      }
    });

    invariant(value, "Tab must have value");

    return value;
  });

  return (
    <Context.Provider value={{ currentActive, setCurrentActive }}>
      <div className={props.className}>{props.children}</div>
    </Context.Provider>
  );
}

type ListProps = ComponentProps<"div">;
function List(props: ListProps) {
  return (
    <div role="tablist" className={props.className}>
      {props.children}
    </div>
  );
}

type TabProps = ComponentProps<"button"> & {
  value: string;
};
function Tab(props: TabProps) {
  const context = useTabsContext("Tabs.Tab should be using inside Tabs.Root");
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (context.currentActive !== props.value) return;

    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [context.currentActive, props.value]);

  function onClick(event: MouseEvent<HTMLButtonElement>) {
    props.onClick?.(event);
    context.setCurrentActive(props.value);
  }

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      className={props.className}
      aria-selected={context.currentActive === props.value}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

type PanelProps = ComponentProps<"div"> & {
  value: string;
};
function Panel(props: PanelProps) {
  const context = useTabsContext("Tabs.Panel should be using inside Tabs.Root");

  return (
    <div
      role="tabpanel"
      className={props.className}
      style={{
        display: context.currentActive !== props.value ? "none" : undefined,
      }}
    >
      {props.children}
    </div>
  );
}

export default {
  Root,
  List,
  Tab,
  Panel,
};
