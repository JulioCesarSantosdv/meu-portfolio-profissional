/**
  * functions.js
  Centraliza textos, traduções (i18n) e comportamentos globais da aplicação
  */

// Dicionário de traduções
const translations = {
    pt: {
        // Navegação
        navAbout: "Sobre Mim",
        navExperience: "Experiência",
        navCertifications: "Certificações", 
        navSkills: "Habilidades",
        navProjects: "Projetos",
        navContact: "Contato",
        
        // Cabeçalho
        name: "Julio Cesar Santos da Silva",
        jobTitle: "Analista de Suporte de TI | Graduado em Sistemas de Informação",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        emailLabel: "E-mail",
        cvLabel: "Baixar CV",
        
        // Sobre Mim
        aboutTitle: "Sobre Mim",
        aboutText1: "Graduado em Sistemas de Informação, com experiência em Análise de Suporte e operações de TI, atuando no atendimento a usuários, troubleshooting e documentação de procedimentos.",
        aboutText2: "Tenho direcionado minha evolução técnica para ambientes em nuvem e práticas de DevOps, desenvolvendo projetos com CI/CD, automação de pipelines, Infraestrutura como Código (Terraform em modo validado), containers e versionamento de código.",
        aboutText3: "Possuo familiaridade com rotinas orientadas a incidentes, análise de logs, execução de deploys via pipeline e padronização de processos, sempre com foco em confiabilidade, rastreabilidade e melhoria contínua.",
        aboutText4: "Busco oportunidades onde possa unir suporte técnico, operações em cloud e automação para contribuir com a estabilidade e eficiência dos ambientes.",
        
        // Experiência
        experienceTitle: "Experiência Profissional",
        exp1Title: "Analista de Suporte",
        exp1Date: "Out 2024 - Mar 2025",
        exp1Company: "Cast Group",
        exp1Desc: "Atuação como suporte N2 em ambiente corporativo crítico, com resolução autônoma de 66% dos chamados (média de 41 chamados/mês). Monitoramento de ambientes virtualizados (VMware), identificação de falhas iniciais e escalonamento técnico para N3.",
        exp2Title: "Analista de Suporte N1",
        exp2Date: "Dez 2021 - Out 2022",
        exp2Company: "Solutis",
        exp2Desc: "Backoffice de chamados, verificando junto ao usuário se sua demanda foi resolvida; Recategorizar, direcionar e solucionar os chamados técnicos da fila por meio do sistema de gestão de chamados; Suporte técnico a hardwares e softwares; Investigação e análise inicial de incidentes; Agendar atendimentos para o suporte local.",
        
        // Certificações
        certificationsTitle: "Certificações",
        cert1Title: "Cloud Concepts & Azure Services",
        cert1Org: "AZ-900 Microsoft Azure Fundamentals - 2025",
        cert2Title: "Sistemas de Informação",
        cert2Org: "Bacharelado Concluído - 2025",
        
        // Habilidades
        skillsTitle: "Habilidades Técnicas",
        supportAnalysisTitle: "Analista de Suporte",
        azureTitle: "Azure",
        
        // Habilidades de Suporte
        remoteSupportSkill: "Suporte Remoto (Remote Desktop, AnyDesk)",
        customerServiceSkill: "Atendimento ao Cliente",
        itsmSkill: "Sistemas ITSM (Sysaid)",
        vmwareSkill: "VMware",
        
        // Habilidades de Azure
        azureAdSkill: "Azure AD / Microsoft Entra ID",
        iamSkill: "Gestão de Identidades e Acessos (IAM)",
        userManagementSkill: "Gestão de usuários e grupos no Azure AD",
        securitySkill: "Segurança em ambientes Microsoft 365",
        accessControlSkill: "Controle de acessos lógicos",
        
        // Projetos
        projectsTitle: "Projetos",
        project1Title: "Weather App – CI/CD Multi-Environment com Azure DevOps",
        project1Desc: "Aplicação web de previsão do tempo com pipeline de CI/CD automatizado no Azure DevOps, incluindo ambientes de Teste, QA e Produção.",
        project2Title: "Em Breve um Projeto Aqui",
        project2Desc: "Em breve um novo projeto será adicionado aqui.",
        project3Title: "Em Breve um Projeto Aqui",
        project3Desc: "Em breve um novo projeto será adicionado aqui.",
        project4Title: "Em Breve um Projeto Aqui",
        project4Desc: "Em breve um novo projeto será adicionado aqui.",
        codePortfolio: "Portifólio",
        docLabel: "Documentação",
        docSlide: "Apresentação",
        docView: "Visualização",
        credentialLabel: "Credencial",
        
        // Contato
        contactTitle: "Entre em Contato",
        contactInfoTitle: "Informações de Contato",
        contactInfoDesc: "Sinta-se à vontade para entrar em contato para discutir seu projeto ou apenas dizer olá!",
        contactEmailTitle: "E-mail",
        contactPhoneTitle: "Telefone",
    },
    en: {
        // Navigation
        navAbout: "About Me",
        navExperience: "Experience",
        navCertifications: "Certifications",
        navSkills: "Skills", 
        navProjects: "Projects",
        navContact: "Contact",
        
        // Header
        name: "Julio Cesar Santos da Silva",
        jobTitle: "IT Support Analyst | Bachelor in Information Systems",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        emailLabel: "Email",
        cvLabel: "Download CV",
        
        // About Me
        aboutTitle: "About Me",
        aboutText1: "Bachelor’s degree in Information Systems with experience in Technical Support and IT operations, working with user support, troubleshooting, and procedural documentation.",
        aboutText2: "I am currently focusing my technical development on cloud environments and DevOps practices, building projects involving CI/CD pipelines, Infrastructure as Code (Terraform validation mode), container builds, and source control.",
        aboutText3: "I am familiar with incident-driven routines, log analysis, pipeline-based deployments, and process standardization, always aiming for reliability, traceability, and continuous improvement.",
        aboutText4: "I am seeking opportunities where I can combine technical support, cloud operations, and automation to enhance system stability and operational efficiency.",
        
        // Experience
        experienceTitle: "Professional Experience",
        exp1Title: "Support Analyst",
        exp1Date: "Oct 2024 - Mar 2025",
        exp1Company: "Cast Group",
        exp1Desc: "Acting as N2 support in a critical corporate environment, with autonomous resolution of 66% of tickets (average 41 tickets/month). Monitoring virtualized environments (VMware), identification of initial failures and technical escalation to N3.",
        exp2Title: "Support Analyst N1",
        exp2Date: "Dec 2021 - Oct 2022",
        exp2Company: "Solutis",
        exp2Desc: "Ticket backoffice, checking with the user if their demand was resolved; Recategorize, direct and solve technical tickets in the queue through the ticket management system; Technical support for hardware and software; Investigation and initial analysis of incidents; Schedule appointments for local support.",
        
        // Certifications
        certificationsTitle: "Certifications",
        cert1Title: "Cloud Concepts & Azure Services",
        cert1Org: "AZ-900 Microsoft Azure Fundamentals - 2025",
        cert2Title: "Information Systems",
        cert2Org: "Bachelor's Degree Completed - 2025",
        
        // Skills
        skillsTitle: "Technical Skills",
        supportAnalysisTitle: "Support Analyst",
        azureTitle: "Azure",
        
        // Support Skills
        remoteSupportSkill: "Remote Support (Remote Desktop, AnyDesk)",
        customerServiceSkill: "Customer Service",
        itsmSkill: "ITSM Systems (Sysaid)",
        vmwareSkill: "VMware",
        
        // Azure Skills
        azureAdSkill: "Azure AD / Microsoft Entra ID",
        iamSkill: "Identity and Access Management (IAM)",
        userManagementSkill: "User and Group Management in Azure AD",
        securitySkill: "Microsoft 365 Security",
        accessControlSkill: "Logical Access Control",
        
        // Projects
        projectsTitle: "Projects",
        project1Title: "Weather App – CI/CD Multi-Environment with Azure DevOps",
        project1Desc: "Weather web application with automated CI/CD pipeline in Azure DevOps, including Test, QA and Production environments.",
        project2Title: "A project coming soon here",
        project2Desc: "A new project will be added here soon.",
        project3Title: "A project coming soon here",
        project3Desc: "A new project will be added here soon.",
        project4Title: "A project coming soon here",
        project4Desc: "A new project will be added here soon.",
        codePortfolio: "Portfolio",
        docLabel: "Documentation",
        docSlide: "Presentation",
        docView: "Visualization",
        credentialLabel: "Credential",
        
        // Contact
        contactTitle: "Contact Me",
        contactInfoTitle: "Contact Information",
        contactInfoDesc: "Feel free to get in touch to discuss your project or just say hello!",
        contactEmailTitle: "Email",
        contactPhoneTitle: "Phone",
    },
    es: {
        // Navegación
        navAbout: "Sobre Mí",
        navExperience: "Experiencia",
        navCertifications: "Certificaciones",
        navSkills: "Habilidades",
        navProjects: "Proyectos", 
        navContact: "Contacto",
        
        // Encabezado
        name: "Julio Cesar Santos da Silva",
        jobTitle: "Analista de Soporte TI | Licenciado en Sistemas de Información",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        emailLabel: "Correo",
        cvLabel: "Descargar CV",
        
        // Sobre Mí
        aboutTitle: "Sobre Mí",
        aboutText1: "Graduado en Sistemas de Información con experiencia en Soporte Técnico y operaciones de TI, brindando atención a usuarios, troubleshooting y documentación de procedimientos.",
        aboutText2: "Actualmente enfoco mi desarrollo técnico en entornos cloud y prácticas DevOps, creando proyectos con pipelines de CI/CD, Infraestructura como Código (Terraform en modo de validación), construcción de contenedores y control de versiones.",
        aboutText3: "Tengo familiaridad con rutinas orientadas a incidentes, análisis de logs, ejecuciones de despliegue mediante pipelines y estandarización de procesos, siempre con enfoque en confiabilidad, trazabilidad y mejora continua.",
        aboutText4: "Busco oportunidades donde pueda integrar soporte técnico, operaciones en la nube y automatización para contribuir a la estabilidad y eficiencia de los entornos.",
        
        // Experiencia
        experienceTitle: "Experiencia Profesional",
        exp1Title: "Analista de Soporte",
        exp1Date: "Oct 2024 - Mar 2025",
        exp1Company: "Cast Group",
        exp1Desc: "Actuación como soporte N2 en ambiente corporativo crítico, con resolución autónoma del 66% de los tickets (promedio 41 tickets/mes). Monitoreo de ambientes virtualizados (VMware), identificación de fallas iniciales y escalamiento técnico a N3.",
        exp2Title: "Analista de Soporte N1",
        exp2Date: "Dic 2021 - Oct 2022",
        exp2Company: "Solutis",
        exp2Desc: "Backoffice de tickets, verificando con el usuario si su demanda fue resuelta; Recategorizar, dirigir y solucionar los tickets técnicos de la cola mediante el sistema de gestión de tickets; Soporte técnico a hardware y software; Investigación y análisis inicial de incidentes; Agendar citas para el soporte local.",
        
        // Certificaciones
        certificationsTitle: "Certificaciones",
        cert1Title: "Cloud Concepts & Azure Services",
        cert1Org: "AZ-900 Microsoft Azure Fundamentals - 2025",
        cert2Title: "Sistemas de Información",
        cert2Org: "Licenciatura Concluida - 2025",
        
        // Habilidades
        skillsTitle: "Habilidades Técnicas",
        supportAnalysisTitle: "Analista de Soporte",
        azureTitle: "Azure",
        
        // Habilidades de Soporte
        remoteSupportSkill: "Soporte Remoto (Remote Desktop, AnyDesk)",
        customerServiceSkill: "Atención al Cliente",
        itsmSkill: "Sistemas ITSM (Sysaid)",
        vmwareSkill: "VMware",
        
        // Habilidades de Azure
        azureAdSkill: "Azure AD / Microsoft Entra ID",
        iamSkill: "Gestión de Identidades y Accesos (IAM)",
        userManagementSkill: "Gestión de usuarios y grupos en Azure AD",
        securitySkill: "Seguridad en entornos Microsoft 365",
        accessControlSkill: "Control de accesos lógicos",
        
        // Proyectos
        projectsTitle: "Proyectos",
        project1Title: "Weather App – CI/CD Multi-Environment con Azure DevOps",
        project1Desc: "Aplicación web meteorológica con pipeline de CI/CD automatizado en Azure DevOps, incluyendo entornos de Prueba, QA y Producción.",
        project2Title: "Un proyecto próximamente aquí",
        project2Desc: "Un nuevo proyecto será añadido aquí próximamente.",
        project3Title: "Un proyecto próximamente aquí",
        project3Desc: "Un nuevo proyecto será añadido aquí próximamente.",
        project4Title: "Un proyecto próximamente aquí",
        project4Desc: "Un nuevo proyecto será añadido aquí próximamente.",
        codePortfolio: "Portafolio",
        docLabel: "Documentación",
        docSlide: "Presentación",
        docView: "Visualización",
        credentialLabel: "Credencial",

        // Contacto
        contactTitle: "Contáctame",
        contactInfoTitle: "Información de Contacto",
        contactInfoDesc: "¡Siéntete libre de ponerte en contacto para discutir tu proyecto o simplemente para saludar!",
        contactEmailTitle: "Correo Electrónico",
        contactPhoneTitle: "Teléfono",
    }
};

// Função para mudar o idioma
function changeLanguage(lang) {
    // Atualiza os textos na página
    document.getElementById('name').textContent = translations[lang].name;
    document.getElementById('job-title').textContent = translations[lang].jobTitle;
    document.getElementById('linkedin-label').textContent = translations[lang].linkedinLabel;
    document.getElementById('github-label').textContent = translations[lang].githubLabel;
    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-text-1').textContent = translations[lang].aboutText1;
    document.getElementById('about-text-2').textContent = translations[lang].aboutText2;
    document.getElementById('about-text-3').textContent = translations[lang].aboutText3;
    document.getElementById('about-text-4').textContent = translations[lang].aboutText4;
    document.getElementById('experience-title').textContent = translations[lang].experienceTitle;
    document.getElementById('exp1-title').textContent = translations[lang].exp1Title;
    document.getElementById('exp1-date').textContent = translations[lang].exp1Date;
    document.getElementById('exp1-company').textContent = translations[lang].exp1Company;
    document.getElementById('exp1-desc').innerHTML = `<p>${translations[lang].exp1Desc}</p>`;
    document.getElementById('exp2-title').textContent = translations[lang].exp2Title;
    document.getElementById('exp2-date').textContent = translations[lang].exp2Date;
    document.getElementById('exp2-company').textContent = translations[lang].exp2Company;
    document.getElementById('exp2-desc').innerHTML = `<p>${translations[lang].exp2Desc}</p>`;
    document.getElementById('certifications-title').textContent = translations[lang].certificationsTitle;
    document.getElementById('cert1-title').textContent = translations[lang].cert1Title;
    document.getElementById('cert1-org').textContent = translations[lang].cert1Org;
    document.getElementById('cert2-title').textContent = translations[lang].cert2Title;
    document.getElementById('cert2-org').textContent = translations[lang].cert2Org;
    
    // === ATUALIZAÇÃO DA SEÇÃO DE HABILIDADES ===
    document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
    
    // Títulos das categorias
    document.getElementById('support-analysis-title').textContent = translations[lang].supportAnalysisTitle;
    document.getElementById('azure-title').textContent = translations[lang].azureTitle;
    
    // Habilidades de Suporte
    document.getElementById('remote-support-skill').textContent = translations[lang].remoteSupportSkill;
    document.getElementById('customer-service-skill').textContent = translations[lang].customerServiceSkill;
    document.getElementById('itsm-skill').textContent = translations[lang].itsmSkill;
    document.getElementById('vmware-skill').textContent = translations[lang].vmwareSkill;
    
    // Habilidades de Azure
    document.getElementById('azure-ad-skill').textContent = translations[lang].azureAdSkill;
    document.getElementById('iam-skill').textContent = translations[lang].iamSkill;
    document.getElementById('user-management-skill').textContent = translations[lang].userManagementSkill;
    document.getElementById('security-skill').textContent = translations[lang].securitySkill;
    document.getElementById('access-control-skill').textContent = translations[lang].accessControlSkill;
    
    // === ATUALIZAÇÃO DA SEÇÃO DE PROJETOS (CORRIGIDO) ===
    document.getElementById('projects-title').textContent = translations[lang].projectsTitle;
    document.getElementById('project1-title').textContent = translations[lang].project1Title;
    document.getElementById('project1-desc').textContent = translations[lang].project1Desc;
    document.getElementById('project2-title').textContent = translations[lang].project2Title;
    document.getElementById('project2-desc').textContent = translations[lang].project2Desc;
    document.getElementById('project3-title').textContent = translations[lang].project3Title;
    document.getElementById('project3-desc').textContent = translations[lang].project3Desc;
    document.getElementById('project4-title').textContent = translations[lang].project4Title;
    document.getElementById('project4-desc').textContent = translations[lang].project4Desc;
    
    // Atualiza labels comuns dos projetos
    const codePortfolioElements = document.querySelectorAll('#code-portfolio');
    codePortfolioElements.forEach(el => el.textContent = translations[lang].codePortfolio);
    
    const docLabelElements = document.querySelectorAll('#doc-label');
    docLabelElements.forEach(el => el.textContent = translations[lang].docLabel);
    
    const docSlideElements = document.querySelectorAll('#doc-slide');
    docSlideElements.forEach(el => el.textContent = translations[lang].docSlide);
    
    const docViewElements = document.querySelectorAll('#doc-view');
    docViewElements.forEach(el => el.textContent = translations[lang].docView);
    
    const credentialLabelElements = document.querySelectorAll('#credential-label');
    credentialLabelElements.forEach(el => el.textContent = translations[lang].credentialLabel);
    
    // === ATUALIZAÇÃO DA SEÇÃO DE CONTATO ===
    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-info-title').textContent = translations[lang].contactInfoTitle;
    document.getElementById('contact-info-desc').textContent = translations[lang].contactInfoDesc;
    document.getElementById('contact-email-title').textContent = translations[lang].contactEmailTitle;
    document.getElementById('contact-phone-title').textContent = translations[lang].contactPhoneTitle;
    
    // Atualiza os botões de navegação
    const navButtons = {
        'about-section': 'navAbout',
        'experience-section': 'navExperience', 
        'certifications-section': 'navCertifications',
        'skills-section': 'navSkills',
        'projects-section': 'navProjects',
        'contact-section': 'navContact'
    };
    
    Object.entries(navButtons).forEach(([section, translationKey]) => {
        const button = document.querySelector(`[data-section="${section}"]`);
        if (button) {
            button.textContent = translations[lang][translationKey];
        }
    });
    
    // Atualiza os botões de idioma ativos
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = lang;
}

// TOGGLE DE TEMA NO NAVBAR (MODIFICADO PARA AFETAR TODA A PÁGINA)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verifica o tema salvo ou preferência do sistema
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Atualiza os ícones do tema
    updateThemeIcons();
});

// Função para atualizar os ícones do tema
function updateThemeIcons() {
    const sunIcon = document.querySelector('.theme-icon.sun');
    const moonIcon = document.querySelector('.theme-icon.moon');
    
    if (body.classList.contains('dark-mode')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Inicializa os ícones corretamente
updateThemeIcons();

// Animações ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Função para navegação suave
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Ativa o botão correspondente à seção visível
function updateActiveNavButton() {
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('.nav-btn, .top-nav-btn');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === current) {
            btn.classList.add('active');
        }
    });
}

// Adiciona event listeners para todos os botões de navegação
document.querySelectorAll('.nav-btn, .top-nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        
        // Remove a classe active de todos os botões
        document.querySelectorAll('.nav-btn, .top-nav-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Adiciona a classe active ao botão clicado
        this.classList.add('active');
        
        // Rola suavemente para a seção
        smoothScrollToSection(sectionId);
    });
});

// Event listeners para os botões de idioma
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        changeLanguage(this.dataset.lang);
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        this.reset();
    });
}

// BACK TO TOP BUTTON
const backToTopButton = document.getElementById('backToTop');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mostrar/esconder o botão "Back to Top" baseado no scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Atualiza os botões ativos durante o scroll
window.addEventListener('scroll', () => {
    updateActiveNavButton();
    animateOnScroll();
});

// Inicializa com Português
changeLanguage('pt');

// Atualiza o ano automaticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Dispara animações ao carregar a página
window.addEventListener('load', animateOnScroll);
