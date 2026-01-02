NeaDev-main/NeaDev-main/src/data/content.ts
export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const content = {
  es: {
    nav: {
      title: "Nea Dev",
    },
    footer: {
      text: "Nea Dev Portfolio",
    },
    hero: {
      title: "Nea Dev",
      role: "Desarrollador de Software & Leader Dev en Minecraft",
    },
    about: {
      title: "Sobre mí",
      p1: "¡Hola! Soy Nea Dev, un desarrollador apasionado por crear experiencias únicas.",
      p2: "Me especializo en el desarrollo de servidores de Minecraft, creación de plugins complejos con la API de Paper/Spigot, y herramientas externas como Launchers y Bots de Discord con integración de IA.",
    },
    experience: {
      title: "Experiencia",
      list: [
        {
          company: "Nea Network",
          role: "Leader Dev",
          period: "2025 - Actualidad",
          description: "Proyecto personal insignia actualmente en fase activa de desarrollo. Estoy implementando una arquitectura de plugins totalmente personalizados para ofrecer mecánicas de juego inéditas. El enfoque está en la creación de un ecosistema único, optimizado para el rendimiento y con sistemas exclusivos que diferencian al servidor del resto del mercado.",
          color: "green-500",
        },
        {
          company: "FlakMc",
          role: "Parcial Config",
          period: "2025",
          description: "Colaboración técnica centrada en la configuración y optimización de sistemas clave. Aporté soluciones rápidas y eficientes para resolver cuellos de botella en la configuración, facilitando el despliegue de nuevas funcionalidades y asegurando la estabilidad operativa del servidor con una intervención ágil.",
          color: "neutral-600",
        },
        {
          company: "Vextium",
          role: "Leader Dev",
          period: "2024 - 2025",
          description: "Lideré el desarrollo técnico integral, desde la conceptualización hasta la ejecución. Estructuré la configuración del servidor para soportar una alta carga, logrando una estabilidad notable con una media de 80 jugadores simultáneos. Mi gestión abarcó tanto la optimización del rendimiento como la implementación de sistemas de juego atractivos para la comunidad.",
          color: "neutral-600",
        },
        {
          company: "Jifer Craft",
          role: "Leader Dev",
          period: "2024",
          description: "Diseño y desarrollo total de un servidor 'Survival Fantasy' con una fuerte identidad RPG. Creé mecánicas inmersivas desde cero, incluyendo sistemas de armaduras y espadas con atributos especiales, así como monturas personalizadas. Todo el contenido fue desarrollado para ofrecer una experiencia de aventura cohesiva y única.",
          color: "neutral-600",
        },
        {
          company: "NeaTecno Arcanus",
          role: "Leader Dev",
          period: "Archivado",
          description: "Servidor de Minecraft altamente complejo centrado en la progresión mediante mods. Diseñé un sistema de niveles y puntos vinculado a 1400 misiones interconectadas, obligando a los jugadores a explorar y dominar múltiples mods para avanzar. Desarrollé un plugin exclusivo para gestionar este intrincado sistema de progresión. Actualmente el proyecto se encuentra archivado para futuras implementaciones.",
          color: "neutral-500",
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      list: [
        {
          name: "NeaDungeons",
          tag: "Paper API",
          tagColor: "green",
          description: "Solución avanzada para la gestión de mazmorras instanciadas. Destaca por su filosofía 'Zero Config', permitiendo a los administradores crear experiencias complejas por fases sin archivos de configuración tediosos. Utiliza un sistema robusto de gestión de mundos temporales para garantizar instancias independientes.",
        },
        {
          name: "NeaTalisman",
          tag: "Paper API",
          tagColor: "green",
          description: "Plugin RPG profundo que introduce un sistema de talismanes y niveles. Permite la creación de items con habilidades activas, reactivas y pasivas. Incluye un editor GUI in-game completo, permitiendo diseñar items complejos con soporte total para texturas custom.",
        },
        {
          name: "NeaShop",
          tag: "Paper API",
          tagColor: "green",
          description: "Sistema económico de próxima generación que simula un mercado de valores real. Los precios fluctúan dinámicamente basándose en la oferta y la demanda de los jugadores en tiempo real, creando una economía viva que se autorregula.",
        },
        {
          name: "NeaBot",
          tag: "AI & Discord",
          tagColor: "blue",
          description: "Asistente de Discord de vanguardia integrado con Inteligencia Artificial. Utiliza una API de IA modificable para entender el contexto, responder dudas complejas de los usuarios y asistir en la moderación. Altamente personalizable para cualquier comunidad.",
        },
        {
          name: "Tomatito Land Launcher",
          tag: "Launcher Dev",
          tagColor: "purple",
          description: "Launcher de Minecraft personalizado desarrollado para una serie de streamers con mods. Facilita la distribución y actualización automática de modpacks, asegurando el acceso fácil y rápido para todos los participantes.",
        },
        {
          name: "NeaDeath",
          tag: "Paper API",
          tagColor: "green",
          description: "Plugin de cosmética y feedback visual que revoluciona los mensajes de muerte. Ofrece soporte completo para colores Hex y gradientes. Su arquitectura ligera asegura un rendimiento óptimo manteniendo una configurabilidad extrema.",
        },
      ],
    },
    skills: {
      title: "Mis Habilidades",
      list: [
        { name: "Java", desc: "Backend & Plugins" },
        { name: "Paper/Spigot API", desc: "Minecraft Core" },
        { name: "Kotlin", desc: "Modern Android & JVM" },
        { name: "AI Integration", desc: "LLM APIs & Bots" },
        { name: "JavaScript", desc: "Web & Scripting" },
        { name: "HTML/CSS", desc: "Frontend Structure" },
        { name: "Discord API", desc: "Bot Development" },
        { name: "Server Admin", desc: "Config & Optimization" },
      ],
    },
  },
  en: {
    nav: {
      title: "Nea Dev",
    },
    footer: {
      text: "Nea Dev Portfolio",
    },
    hero: {
      title: "Nea Dev",
      role: "Software Developer & Minecraft Leader Dev",
    },
    about: {
      title: "About Me",
      p1: "Hello! I'm Nea Dev, a developer passionate about creating unique experiences.",
      p2: "I specialize in Minecraft server development, creating complex plugins with the Paper/Spigot API, and external tools like Launchers and Discord Bots with AI integration.",
    },
    experience: {
      title: "Experience",
      list: [
        {
          company: "Nea Network",
          role: "Leader Dev",
          period: "2025 - Present",
          description: "Flagship personal project currently in active development. I am implementing a fully custom plugin architecture to offer unpublished gameplay mechanics. The focus is on creating a unique ecosystem, optimized for performance and with exclusive systems that differentiate the server from the rest of the market.",
          color: "green-500",
        },
        {
          company: "FlakMc",
          role: "Partial Config",
          period: "2025",
          description: "Technical collaboration focused on configuration and key system optimization. I provided quick and efficient solutions to resolve configuration bottlenecks, facilitating the deployment of new features and ensuring server operational stability with agile intervention.",
          color: "neutral-600",
        },
        {
          company: "Vextium",
          role: "Leader Dev",
          period: "2024 - 2025",
          description: "I led the integral technical development, from conceptualization to execution. I structured the server configuration to support high load, achieving remarkable stability with an average of 80 concurrent players. My management covered both performance optimization and the implementation of engaging game systems for the community.",
          color: "neutral-600",
        },
        {
          company: "Jifer Craft",
          role: "Leader Dev",
          period: "2024",
          description: "Total design and development of a 'Survival Fantasy' server with a strong RPG identity. I created immersive mechanics from scratch, including armor and sword systems with special attributes, as well as custom mounts. All content was developed to offer a cohesive and unique adventure experience.",
          color: "neutral-600",
        },
        {
          company: "NeaTecno Arcanus",
          role: "Leader Dev",
          period: "Archived",
          description: "Highly complex Minecraft server focused on progression through mods. I designed a level and point system linked to 1400 interconnected quests, forcing players to explore and master multiple mods to advance. I developed an exclusive plugin to manage this intricate progression system. The project is currently archived for future implementations.",
          color: "neutral-500",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      list: [
        {
          name: "NeaDungeons",
          tag: "Paper API",
          tagColor: "green",
          description: "Advanced solution for instanced dungeon management. Features a 'Zero Config' philosophy, allowing admins to create complex phased experiences without tedious config files. Uses a robust temporary world management system to guarantee independent instances.",
        },
        {
          name: "NeaTalisman",
          tag: "Paper API",
          tagColor: "green",
          description: "Deep RPG plugin introducing a talisman and level system. Allows creation of items with active, reactive, and passive abilities. Includes a complete in-game GUI editor, allowing complex item design with full support for custom textures.",
        },
        {
          name: "NeaShop",
          tag: "Paper API",
          tagColor: "green",
          description: "Next-gen economic system simulating a real stock market. Prices fluctuate dynamically based on real-time player supply and demand, creating a living, self-regulating economy.",
        },
        {
          name: "NeaBot",
          tag: "AI & Discord",
          tagColor: "blue",
          description: "Cutting-edge Discord assistant integrated with Artificial Intelligence. Uses a modifiable AI API to understand context, answer complex user questions, and assist in moderation. Highly customizable for any community.",
        },
        {
          name: "Tomatito Land Launcher",
          tag: "Launcher Dev",
          tagColor: "purple",
          description: "Custom Minecraft Launcher developed for a streamer series with mods. Facilitates automatic modpack distribution and updates, ensuring easy and quick access for all participants.",
        },
        {
          name: "NeaDeath",
          tag: "Paper API",
          tagColor: "green",
          description: "Cosmetic and visual feedback plugin revolutionizing death messages. Offers full support for Hex colors and gradients. Its lightweight architecture ensures optimal performance while maintaining extreme configurability.",
        },
      ],
    },
    skills: {
      title: "Skills",
      list: [
        { name: "Java", desc: "Backend & Plugins" },
        { name: "Paper/Spigot API", desc: "Minecraft Core" },
        { name: "Kotlin", desc: "Modern Android & JVM" },
        { name: "AI Integration", desc: "LLM APIs & Bots" },
        { name: "JavaScript", desc: "Web & Scripting" },
        { name: "HTML/CSS", desc: "Frontend Structure" },
        { name: "Discord API", desc: "Bot Development" },
        { name: "Server Admin", desc: "Config & Optimization" },
      ],
    },
  },
};
