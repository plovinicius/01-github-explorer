import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com'
}

export function RepositoryList() {
  return (
    <section className="repository-List">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}