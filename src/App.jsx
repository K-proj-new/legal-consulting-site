const menuItems = [
  "Практики",
  "О компании",
  "Команда",
  "Кейсы",
  "Новости",
  "Контакты",
]

const practices = [
  {
    title: "Корпоративное право",
    description:
      "Сопровождение бизнеса, договорная работа, корпоративные изменения и ключевые решения компании.",
  },
  {
    title: "Налоговое и бухгалтерское сопровождение",
    description:
      "Финансовая устойчивость бизнеса, отчетность, налоговое планирование и снижение рисков.",
  },
  {
    title: "Регистрация и структурирование бизнеса",
    description:
      "Создание компаний, выбор модели работы и построение эффективной юридической структуры.",
  },
]

const cases = [
  {
    title: "Оптимизация налоговой структуры",
    description:
      "Снижение налоговой нагрузки для группы компаний через изменение структуры бизнеса.",
  },
  {
    title: "Сопровождение сделки",
    description:
      "Юридическое сопровождение сделки по покупке бизнеса с минимизацией рисков.",
  },
]

const team = [
  {
    name: "Имя Фамилия",
    role: "Управляющий партнёр",
    description:
      "Корпоративное право, сопровождение сделок, юридическая стратегия бизнеса.",
  },
  {
    name: "Имя Фамилия",
    role: "Партнёр по налогам и финансам",
    description:
      "Налоговое структурирование, бухгалтерское сопровождение, финансовые риски.",
  },
  {
    name: "Имя Фамилия",
    role: "Старший юрист",
    description:
      "Договорная работа, корпоративные документы, сопровождение текущей деятельности компаний.",
  },
]

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#111",
    background: "#fff",
  },
  header: {
    padding: "24px 40px",
    borderBottom: "1px solid #e5e5e5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 10,
  },
  brand: {
    fontSize: "20px",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    gap: "24px",
    fontSize: "15px",
  },
  navLink: {
    color: "#111",
    textDecoration: "none",
  },
  heroSection: {
    padding: "96px 40px 88px",
    borderBottom: "1px solid #e5e5e5",
  },
  heroWrap: {
    maxWidth: "980px",
    margin: "0 auto",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "72px",
    lineHeight: 1.02,
    margin: 0,
    marginBottom: "24px",
    fontWeight: 700,
    letterSpacing: "-1.5px",
  },
  heroText: {
    fontSize: "22px",
    lineHeight: 1.5,
    color: "#444",
    maxWidth: "760px",
    margin: "0 auto 32px",
  },
  heroButton: {
    padding: "14px 22px",
    background: "#111",
    color: "#fff",
    border: "none",
    fontSize: "15px",
    cursor: "pointer",
  },
  section: {
    padding: "88px 40px",
    borderBottom: "1px solid #e5e5e5",
  },
  sectionGray: {
    padding: "88px 40px",
    borderBottom: "1px solid #e5e5e5",
    background: "#f7f7f7",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "48px",
    lineHeight: 1.05,
    marginTop: 0,
    marginBottom: "40px",
    fontWeight: 700,
    letterSpacing: "-0.8px",
  },
  practicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  practiceCard: {
    paddingTop: "24px",
    borderTop: "1px solid #111",
  },
  cardTitle: {
    fontSize: "28px",
    lineHeight: 1.2,
    marginTop: 0,
    marginBottom: "16px",
    fontWeight: 700,
  },
  cardText: {
    fontSize: "17px",
    lineHeight: 1.6,
    color: "#444",
    margin: 0,
  },
  casesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
  },
  caseCard: {
    paddingTop: "20px",
    borderTop: "1px solid #111",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  teamCard: {
    borderTop: "1px solid #111",
    paddingTop: "20px",
  },
  teamName: {
    fontSize: "26px",
    lineHeight: 1.2,
    marginTop: 0,
    marginBottom: "8px",
    fontWeight: 700,
  },
  teamRole: {
    fontSize: "15px",
    color: "#666",
    marginTop: 0,
    marginBottom: "16px",
  },
  ctaSection: {
    padding: "96px 40px",
    background: "#111",
    color: "#fff",
  },
  ctaWrap: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "48px",
    lineHeight: 1.05,
    marginTop: 0,
    marginBottom: "24px",
    fontWeight: 700,
    letterSpacing: "-0.8px",
  },
  ctaText: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: "#d1d1d1",
    marginTop: 0,
    marginBottom: "32px",
  },
  ctaButton: {
    padding: "14px 24px",
    background: "#fff",
    color: "#111",
    border: "none",
    fontSize: "15px",
    cursor: "pointer",
  },
}

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>Legal Consulting</div>

        <nav style={styles.nav}>
          {menuItems.map((item) => (
            <a key={item} href="#" style={styles.navLink}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section style={styles.heroSection}>
          <div style={styles.heroWrap}>
            <h1 style={styles.heroTitle}>
              Юридическое и финансовое сопровождение бизнеса
            </h1>

            <p style={styles.heroText}>
              Работаем как внешний юридический и финансовый департамент.
              Помогаем выстроить структуру бизнеса, снизить налоговые риски
              и сопровождать ключевые решения.
            </p>

            <button style={styles.heroButton}>Получить консультацию</button>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Практики</h2>

            <div style={styles.practicesGrid}>
              {practices.map((practice) => (
                <article key={practice.title} style={styles.practiceCard}>
                  <h3 style={styles.cardTitle}>{practice.title}</h3>
                  <p style={styles.cardText}>{practice.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.sectionGray}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Кейсы</h2>

            <div style={styles.casesGrid}>
              {cases.map((item) => (
                <article key={item.title} style={styles.caseCard}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Команда</h2>

            <div style={styles.teamGrid}>
              {team.map((member, index) => (
                <article key={`${member.name}-${index}`} style={styles.teamCard}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <p style={styles.cardText}>{member.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <div style={styles.ctaWrap}>
            <h2 style={styles.ctaTitle}>Обсудим вашу задачу</h2>
            <p style={styles.ctaText}>
              Свяжитесь с нами, и мы предложим оптимальное решение для вашего бизнеса.
            </p>
            <button style={styles.ctaButton}>Связаться с нами</button>
          </div>
        </section>
      </main>
    </div>
  )
}
