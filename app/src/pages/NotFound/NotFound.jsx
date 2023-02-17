import "./NotFoundStyles.css";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function NotFound() {
  return (
    <div>
      <div className="notFound">
        <h1>Ops... ocorreu erro</h1>
        <span>
          Voltar para <a href="/">home</a>
        </span>
        <div className="notFound-error">( ˘︹˘ )</div>
        <div className="sociais">
          <a href="">
            <AiFillGithub />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
