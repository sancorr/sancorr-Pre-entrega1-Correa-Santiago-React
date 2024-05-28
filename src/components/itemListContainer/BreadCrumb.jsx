import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <Link to="/">
            <li class="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </Link>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <Link to="/">
            <li class="breadcrumb-item">Home</li>
          </Link>
          <Link to="/celulares">
            <li class="breadcrumb-item active" aria-current="page">
              Celulares
            </li>
          </Link>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <Link to="/">
            <li class="breadcrumb-item">Home</li>
          </Link>
          <Link to="/celulares">
            <li class="breadcrumb-item">Celulares</li>
          </Link>
          <Link to="/computadoras">
            <li class="breadcrumb-item">Computadoras</li>
          </Link>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <Link to="/">
            <li class="breadcrumb-item">Home</li>
          </Link>
          <Link to="/celulares">
            <li class="breadcrumb-item">Celulares</li>
          </Link>
          <Link to="/computadoras">
            <li class="breadcrumb-item">Computadoras</li>
          </Link>
          <Link to="/electronica">
            <li class="breadcrumb-item">Electronica</li>
          </Link>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
