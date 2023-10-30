import Link from "next/link";

async function fetchContents(name) {
  const request = await fetch(
    `https://api.github.com/repos/akhmedovms/${name}/contents`
  );
  const contents = await request.json();
  return contents;
}

async function Repodir({ name }) {
  const contents = await fetchContents(name);

  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <div>
      <h3>Content Links</h3>
      <ul>
        {dirs.map((dir) => {
          return (
            <li key={dir.url}>
              <Link href="">{dir.path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Repodir;
