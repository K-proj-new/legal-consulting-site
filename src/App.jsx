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
      "Мы сопровождаем компании на всех этапах развития: от текущей операционной деятельности до сложных корпоративных изменений. Помогаем выстроить юридическую структуру, минимизировать риски и обеспечить устойчивость бизнеса. Работаем с договорами, корпоративными документами и внутренними процедурами, участвуем в ключевых решениях компании.",
  },
  {
    title: "Налоговое и бухгалтерское сопровождение",
    description:
      "Обеспечиваем прозрачность финансовых процессов и контроль налоговой нагрузки. Помогаем выстроить эффективную систему учета, снизить риски и избежать претензий со стороны контролирующих органов. Сопровождаем отчетность, налоговое планирование и взаимодействие с государственными органами.",
  },
  {
    title: "Регистрация и структурирование бизнеса",
    description:
      "Помогаем создать бизнес с правильной юридической и финансовой моделью с самого начала. Подбираем оптимальную форму, структуру владения и операционную схему. Сопровождаем регистрацию компаний и выстраиваем процессы для дальнейшего устойчивого развития.",
  },
]

const cases = [
  {
    title: "Реструктуризация корпоративной модели",
    description:
      "Сопровождали изменение структуры бизнеса для повышения управляемости, снижения юридических рисков и подготовки компании к дальнейшему развитию.",
  },
  {
    title: "Налоговое сопровождение и снижение рисков",
    description:
      "Провели анализ финансовой и налоговой модели компании, предложили практические решения для снижения нагрузки и повышения прозрачности процессов.",
  },
  {
    title: "Сопровождение сделки и защита интересов собственника",
    description:
      "Подготовили юридическую позицию, структурировали документы и сопровождали ключевые этапы сделки с фокусом на безопасность и контроль рисков.",
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

const news = [
  {
    title: "Аналитика по корпоративному праву и налогам",
    description:
      "Публикуем обзоры изменений законодательства, судебной практики и ключевых тенденций, которые влияют на бизнес и принятие решений.",
  },
  {
    title: "Практические комментарии для собственников и компаний",
    description:
      "Объясняем юридические и финансовые вопросы прикладным языком, с фокусом на риски, последствия и практические решения.",
  },
  {
    title: "Обзоры ключевых изменений для бизнеса",
    description:
      "Отслеживаем значимые изменения в регулировании и даём краткие ориентиры для компаний, которым важно быстро адаптироваться к новой правовой среде.",
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
  introLead: {
    maxWidth: "800px",
    fontSize: "20px",
    lineHeight: 1.6,
    marginBottom: "24px",
  },
  introText: {
    maxWidth: "800px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#444",
    marginBottom: "20px",
  },
  introTextLast: {
    maxWidth: "800px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#444",
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
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const visibleSections = ["about", "practices", "cases", "team", "news", "contacts"]

    const handleScroll = () => {
      let current = "about"

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
              Внешний юридический и финансовый департамент для бизнеса
            </h1>

            <p style={styles.heroText}>
              Комплексное сопровождение под ключ: корпоративное право, налоги,
              бухгалтерия и ключевые сделки.
            </p>

            <button style={styles.heroButton}>Получить консультацию</button>
          </div>
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>О компании</h2>

            <p style={styles.introLead}>
              Ayada — внешний юридический и финансовый департамент для бизнеса.
            </p>

            <p style={styles.introText}>
              Мы обеспечиваем комплексное сопровождение компаний: корпоративное право,
              налоговое планирование, бухгалтерия и сопровождение ключевых сделок.
            </p>

            <p style={styles.introTextLast}>
              Ayada — юридический бутик, ориентированный на бизнес-задачи собственников,
              компаний и инвесторов. Мы помогаем принимать стратегические решения и
              снижать юридические и финансовые риски.
            </p>
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

        <section id="news" style={styles.sectionGray}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Новости</h2>

            <div style={styles.newsGrid}>
              {news.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
