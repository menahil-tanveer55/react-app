interface Props {
    color?: 'primary' | 'secondary' | 'warning' | 'danger';
    text: string,
    onClick: ()=> void
}
function Button({color= 'primary',text, onClick}: Props) {
    return <><button type="button" className={'btn btn-'+color} onClick={onClick}>{text}</button></>
}
export default Button