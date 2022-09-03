export class ProjectFunctions {
  getProjectsSmall() {
    return fetch('data/projects-small.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getProjects() {
    return fetch('data/projects.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getProjectsWithInfoSmall() {
    return fetch('data/projects-info-small.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
