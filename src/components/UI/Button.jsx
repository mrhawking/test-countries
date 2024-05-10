import { Link } from 'react-router-dom'

const Button = ({className, url, children}) => {
  return (
    <Link className={`linkBtn ${className}`} to={url}>{children}</Link>
  );
};

export default Button;