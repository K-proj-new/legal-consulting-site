import { useEffect, useState } from "react"

const BRAND_COLOR = "#5a1f2c"

const menuItems = [
  { label: "Практики", id: "practices" },
  { label: "О компании", id: "about" },
  { label: "Команда", id: "team" },
  { label: "Кейсы", id: "cases" },
  { label: "Новости", id: "news" },
  { label: "Контакты", id: "contacts" },
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
    color: BRAND_COLOR,
  },
  nav: {
    display: "flex",
    gap: "24px",
    fontSize: "15px",
  },
  navLink: {
    color: "#111",
    textDecoration: "none",
    paddingBottom: "4px",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s ease, border-color 0.2s ease",
  },
  navLinkActive: {
    color: BRAND_COLOR,
    textDecoration: "none",
    paddingBottom: "4px",
    borderBottom: `2px solid ${BRAND_COLOR}`,
    transition: "color 0.2s ease, border-color 0.2s ease",
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
    background: BRAND_COLOR,
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
    marginBottom: "40px",
    fontWeight: 700,
  },
  practicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  practiceCard: {
    paddingTop: "24px",
    borderTop: `2px solid ${BRAND_COLOR}`,
  },
  casesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  ctaSection: {
    padding: "96px 40px",
    background: BRAND_COLOR,
    color: "#fff",
  },
  ctaWrap: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  ctaTitle: {
    color: "#fff",
    fontSize: "56px",
    fontWeight: 700,
    lineHeight: 1.05,
    margin: 0,
    marginBottom: "20px",
  },
  ctaText: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: "#f1dfe4",
    maxWidth: "700px",
    margin: "0 auto 32px",
  },
  ctaButton: {
    padding: "14px 28px",
    background: "#fff",
    color: BRAND_COLOR,
    border: "none",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
  },
}

export default function App() {
  const [activeSection, setActiveSection] = useState("practices")

  useEffect(() => {
    const visibleSections = ["practices", "cases", "team", "contacts"]

    const handleScroll = () => {
      let current = "practices"

      for (const id of visibleSections) {
        const element = document.getElementById(id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 140) {
          current = id
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>Ayada Legal</div>

        <nav style={styles.nav}>
          {menuItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={isActive ? styles.navLinkActive : styles.navLink}
              >
                {item.label}
              </a>
            )
          })}
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

        <section id="practices" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Практики</h2>

            <div style={styles.practicesGrid}>
              {practices.map((practice) => (
                <div key={practice.title} style={styles.practiceCard}>
                  <h3>{practice.title}</h3>
                  <p>{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" style={styles.sectionGray}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Кейсы</h2>

            <div style={styles.casesGrid}>
              {cases.map((c) => (
                <div key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Команда</h2>

            <div style={styles.teamGrid}>
              {team.map((m, i) => (
                <div key={i}>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                  <p>{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" style={styles.ctaSection}>
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
