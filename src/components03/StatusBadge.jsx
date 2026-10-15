function StatusBadge({ status }) {
  const classe =
    status === "Concluído"
      ? "status concluido"
      : status === "Em desenvolvimento"
        ? "status desenvolvimento"
        : status === "Planejamento"
          ? "status planejamento"
          : "status";

  const icone =
    status === "Concluído" ? "✅" : status === "Em desenvolvimento" ? "🛠️" : status === "Planejamento" ? "📝" : "•";

  return (
    <span className={classe}>
      {icone} {status}
    </span>
  );
}

export default StatusBadge;
