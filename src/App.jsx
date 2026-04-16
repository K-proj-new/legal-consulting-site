import { useEffect, useState } from "react"
import { news } from "./data/news"
import { cases } from "./data/cases"
import { team } from "./data/team"
import { practices } from "./data/practices"

const BRAND_COLOR = "#5a1f2c"

const menuItems = [
  { label: "О компании", id: "about" },
  { label: "Практики", id: "practices" },
  { label: "Кейсы", id: "cases" },
  { label: "Команда", id: "team" },
  { label: "Новости", id: "news" },
  { label: "Контакты", id: "contacts" },
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
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "76px",
    lineHeight: 1.0,
    margin: 0,
    marginBottom: "28px",
    fontWeight: 700,
    letterSpacing: "-1.8px",
  },
  heroText: {
    fontSize: "24px",
    lineHeight: 1.55,
    color: "#444",
    maxWidth: "700px",
    margin: "0 auto 40px",
  },
  heroButton: {
    padding: "16px 28px",
    background: BRAND_COLOR,
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 12px 24px rgba(90, 31, 44, 0.18)",
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
    background: "#fff",
    border: "1px solid #e9e7ea",
    borderRadius: "12px",
    padding: "20px 22px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  caseCard: {
    background: "#fff",
    border: "1px solid #e9e7ea",
    borderRadius: "12px",
    padding: "20px 22px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  teamCard: {
    background: "#fff",
    border: "1px solid #e9e7ea",
    borderRadius: "12px",
    padding: "20px 22px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  newsCard: {
    background: "#fff",
    border: "1px solid #e9e7ea",
    borderRadius: "12px",
    padding: "20px 22px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 30px rgba(0,0,0,0.08)",
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

  const addHover = (e) => Object.assign(e.currentTarget.style, styles.cardHover)
  const removeHover = (e) =>
    Object.assign(e.currentTarget.style, {
      transform: "none",
      boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
    })

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

            <a
              href="#contacts"
              style={{ ...styles.heroButton, display: "inline-block", textDecoration: "none" }}
            >
              Получить консультацию
            </a>
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
                <div
                  key={practice.title}
                  style={styles.practiceCard}
                  onMouseEnter={addHover}
                  onMouseLeave={removeHover}
                >
                  <h3 style={{ marginTop: 0 }}>{practice.title}</h3>
                  <p style={{ margin: "6px 0 10px", color: "#111", fontWeight: 600 }}>
                    {practice.subtitle}
                  </p>
                  <p style={{ margin: 0, color: "#444" }}>
                    {practice.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" style={styles.sectionGray}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Кейсы</h2>

            <div style={styles.casesGrid}>
              {cases.map((item) => (
                <div
                  key={item.title}
                  style={styles.caseCard}
                  onMouseEnter={addHover}
                  onMouseLeave={removeHover}
                >
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "#444" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Команда</h2>

            <div style={styles.teamGrid}>
              {team.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  style={styles.teamCard}
                  onMouseEnter={addHover}
                  onMouseLeave={removeHover}
                >
                  <h3 style={{ marginTop: 0 }}>{member.name}</h3>
                  <p style={{ color: BRAND_COLOR, marginTop: 4 }}>{member.role}</p>
                  <p style={{ margin: 0, color: "#444" }}>{member.description}</p>
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
                <div
                  key={item.title}
                  style={styles.newsCard}
                  onMouseEnter={addHover}
                  onMouseLeave={removeHover}
                >
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "#444" }}>{item.description}</p>
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
            <div style={{ fontSize: "18px", lineHeight: 1.8, color: "#fff" }}>
              <div>Email: your@email.com</div>
              <div>Телефон: +7 (___) ___-__-__</div>
              <div>Telegram: @yourtelegram</div>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          padding: "40px",
          background: "#0f0d12",
          color: "#aaa",
          fontSize: "14px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "12px", color: "#fff", fontWeight: 700 }}>
            Ayada Legal
          </div>

          <div style={{ marginBottom: "8px" }}>
            Юридическое и финансовое сопровождение бизнеса
          </div>

          <div style={{ opacity: 0.6 }}>
            © 2026 ayada.ru — Все права защищены
          </div>
        </div>
      </footer>
    </div>
  )
}
