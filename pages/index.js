import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <ul>
            <Link href="/Home">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link href="/About">
              <li>
                <a>About</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
