import '../styles/components/404Page.css';

const Page404 = ({ history }) => {
  return (
    <div className="container">
      <div id="not-found">
        <div className="not-found">
          <h1 className="text-center title-404">404</h1>
          <h2 className="text-center text-404">Página não encontrada, retornar a <span className="link-404" onClick={() => history.push('/')}>Página Inicial</span>!</h2>
        </div>
      </div>
    </div>
  );
}

export default Page404;