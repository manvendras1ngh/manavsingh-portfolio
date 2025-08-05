import { PopupButton } from "react-calendly";

const ScheduleCall = ({ className }: { className: string }) => (
  <PopupButton
    url="https://calendly.com/manvendrapratap99/30min"
    rootElement={document.getElementById("root")!}
    text="Schedule a Call"
    className={className}
  />
);

export default ScheduleCall;
