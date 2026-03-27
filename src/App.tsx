import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Équipe", href: "#team" },
  { label: "Articles", href: "#posts" },
  { label: "Contact", href: "#footer" },
]

const teamMembers = [
  { name: "Alice Martin", role: "Designer UI/UX", initials: "AM", description: "Passionnée par les interfaces minimalistes et l'expérience utilisateur centrée sur l'humain." },
  { name: "Baptiste Dubois", role: "Développeur Full-Stack", initials: "BD", description: "Spécialisé en React et Node.js avec 5 ans d'expérience en startup." },
  { name: "Clara Petit", role: "Chef de Projet", initials: "CP", description: "Experte en coordination d'équipes pluridisciplinaires et gestion de produit agile." },
]

const posts = [
  { title: "Comment créer une interface moderne en 2024", tag: "Design", description: "Les tendances du design web évoluent rapidement. Nous explorons les meilleures pratiques pour créer des interfaces élégantes, accessibles et performantes qui captivent vos utilisateurs." },
  { title: "Les fondamentaux du développement front-end", tag: "Dev", description: "HTML, CSS et JavaScript forment la base de tout projet web. Voici notre guide complet pour démarrer ou approfondir vos connaissances sur ces technologies essentielles." },
  { title: "De Figma au code : mon processus de travail", tag: "Workflow", description: "Passer d'une maquette Figma à un site fonctionnel demande méthode et rigueur. Je partage ici mon flux de travail, de l'analyse du design jusqu'au déploiement final." },
]

export default function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 w-full h-16 bg-[#e9e9e9] flex items-center justify-between px-6 md:px-24">
        <a href="#" className="text-lg font-bold">Mon Portfolio</a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors no-underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-56 pt-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium rounded-md hover:bg-muted transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        <Avatar className="h-48 w-48 md:h-64 md:w-64 shrink-0">
          <AvatarImage src="https://via.placeholder.com/264" alt="Photo de profil" />
          <AvatarFallback className="text-4xl">RP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight">Bonjour, je suis [Votre Nom]</h1>
          <p className="text-muted-foreground leading-relaxed">
            Développeur passionné par la création d'expériences web modernes et intuitives.
            Je transforme vos idées en produits digitaux de qualité, en alliant design soigné
            et code performant. Toujours à la recherche de nouveaux défis et opportunités.
          </p>
          <div className="flex gap-3 justify-center md:justify-start flex-wrap">
            <a href="#posts" className={cn(buttonVariants({ variant: "default" }))}>Voir mes projets</a>
            <a href="#footer" className={cn(buttonVariants({ variant: "outline" }))}>Me contacter</a>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── TEAM ── */}
      <section id="team" className="bg-[#e9e9e9] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <Card key={member.name} className="bg-white text-center">
                <CardHeader className="items-center gap-4 pb-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://via.placeholder.com/167" alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{member.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section id="posts" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">Derniers Articles</h2>
        <div className="flex flex-col gap-8">
          {posts.map(post => (
            <Card key={post.title} className="flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#d9d9d9] w-full md:w-72 h-48 md:h-auto shrink-0" />
              <div className="flex flex-col justify-center p-6 gap-3">
                <Badge variant="outline" className="w-fit">{post.tag}</Badge>
                <h3 className="font-bold text-lg leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                <Button variant="link" className="w-fit px-0">
                  Lire la suite →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── FOOTER ── */}
      <footer id="footer" className="bg-[#e9e9e9] py-16 px-6 md:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-base mb-3">Mon Portfolio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Créateur d'expériences web modernes. Disponible pour des missions freelance et des collaborations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm text-muted-foreground">
              <li><a href="mailto:ronanlem@proton.me" className="hover:text-primary transition-colors no-underline">ronanlem@proton.me</a></li>
              <li><a href="#" className="hover:text-primary transition-colors no-underline">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors no-underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-xs text-muted-foreground">© 2024 Mon Portfolio — Tous droits réservés</p>
      </footer>

    </div>
  )
}
