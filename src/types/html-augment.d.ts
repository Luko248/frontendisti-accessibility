declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    command?: string;
    commandfor?: string;
    popover?: boolean | "auto" | "manual";
    closedby?: string;
  }

  interface IntrinsicElements {
    selectedcontent: HTMLAttributes;
  }
}
