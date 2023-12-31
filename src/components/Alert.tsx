
interface Props {
    children: string;
    color?: "success" | "primary" |"warning";
    onDismiss: (isDismissed: any)=> void;
}
function Alert({color="primary",children,onDismiss}:Props) {
    return <>
    <div className={"alert alert-dismissable alert-" + color} onClick={onDismiss} role="alert">
  {children}
  <button type="button" className="btn-close btn-success"></button>
</div></>
}
export default Alert