const repositoryName = 'unform';

export function RepositoryList() {
  return (
    <section className="repository-List">
      <h1>Lista de repositorios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositorio
          </a>
        </li>
      </ul>
    </section>
  )
}