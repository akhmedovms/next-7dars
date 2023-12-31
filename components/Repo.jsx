import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const request = await fetch(
    `https://api.github.com/repos/akhmedovms/${name}`
  );
  const repo = await request.json();
  return repo;
}

async function Repo({ name }) {
  const repo = await fetchRepo(name);
  return (
    <>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>

      <div className="repo-details">
        <span>
          <FaStar /> {repo.stargazers_count}
        </span>
        <span>
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span>
          <FaEye /> {repo.watchers_count}
        </span>
      </div>
    </>
  );
}

export default Repo;
