const team = [
  { name: "Ivan", role: "Oficial food tester" },
];

export default function About() {
  return (
    <section>
      <h2>About Us</h2>
      <ul>
        {team.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </section>
  );
}