const Attribution = ({ name, githubProfileLink }) => (
  <div className="text-center">
    Challenge by
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer"
    >
      Frontend Mentor
    </a>
    . Coded by{" "}
    <a className="font-semibold text-cyan-dark-3" href={githubProfileLink}>
      {name}
    </a>
    .
  </div>
);

export default Attribution;
