var estruturageral = {
    mensagemfinal: {
        positiva: [
            "Muito bem! Você arrasou!",
            "Para aprimorar seus conhecimentos, acesse o Guia de Boas Práticas para o uso de tecnologias digitais no Espie. Neste guia, que destaca as melhores práticas para aproveitar as ferramentas Microsoft 365, Minecraft Education e Hacking STEM, você encontrará diversas situações de aprendizagem para auxiliar no planejamento e engajamento de suas aulas. Além disso, convidamos você a contribuir para a construção deste documento compartilhando suas práticas educacionais.",
            "Bom trabalho."
        ],
        negativa: [
            "Foi por pouco!",
            "Talvez seja interessante revisar o conteúdo e tentar de novo.",
            "Para reiniciar, basta clicar no botão abaixo."
        ]
    },
    config: {
        acertos_para_vitoria: 0 // 0 = >50% de acertos.
    }
}
var perguntas = [
    {
        titulo: "Ação docente. Eu gostaria de:",
        pergunta: "Criar uma planilha de cálculo para acompanhar o progresso dos alunos em atividades individuais.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Word"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Excel"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Outlook"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Power Point"
            },
        ],
        feedbacks: {
            
            positivo: "O Excel oferece recursos avançados para criar e organizar dados de forma eficiente, sendo ideal para acompanhar o progresso dos alunos em atividades individuais.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/treinamento-em-v%C3%ADdeo-do-excel-9bc05390-e94c-46af-a5b3-d7c22f6990bb' target='_blank'>Treinamento em vídeo do Excel - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Ação docente. Eu gostaria de:",
        pergunta: "Criar documentos de texto, como trabalhos acadêmicos ou anotações de aula.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Word"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Excel"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Teams"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Access"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! O Word é uma ferramenta amplamente utilizada para criar documentos de texto, proporcionando recursos avançados de formatação e edição para trabalhos acadêmicos e anotações de aula.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/treinamento-de-word-para-windows-7bcd85e6-2c3d-4c3c-a2a5-5ed8847eae73' target='_blank'>Treinamento de Word para Windows - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Ação docente. Eu gostaria de:",
        pergunta: "Coletar feedback dos alunos sobre uma aula ou atividade.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Excel"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Word"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Access"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Forms"
            },
        ],
        feedbacks: {
            
            positivo: "Ótimo! O Forms é uma ferramenta eficaz para coletar feedback dos alunos de forma rápida e fácil, o que pode auxiliar na melhoria contínua das práticas de ensino.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/forms' target='_blank'>Auxílio e aprendizado do Microsoft Forms</a>"
            
        }
    },
    {
        titulo: "Ação docente. Eu gostaria de:",
        pergunta: "Armazenar e compartilhar documentos, apresentações e outros materiais educacionais de forma segura e acessível em nuvem.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Access"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Excel"
            },
            {
                botao: "c",
                validacao: true,
                texto: "OneDrive"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Skype"
            },
        ],
        feedbacks: {
            
            positivo: "Perfeito! O OneDrive é uma solução conveniente para armazenar e compartilhar materiais educacionais, proporcionando acesso fácil e seguro a partir de qualquer dispositivo.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/treinamento-em-v%C3%ADdeo-do-onedrive-1f608184-b7e6-43ca-8753-2ff679203132' target='_blank'>Treinamento em vídeo do OneDrive - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Aula criativa. Eu gostaria de:",
        pergunta: "Criar uma apresentação visualmente atraente e dinâmica.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Word"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Sharepoint"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Access"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Power Point"
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns! O PowerPoint é uma ferramenta amplamente utilizada para criar apresentações visuais que podem ajudar a explicar conceitos de forma envolvente durante as aulas.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/treinamento-de-powerpoint-para-windows-40e8c930-cb0b-40d8-82c4-bd53d3398787' target='_blank'>Treinamento de PowerPoint para Windows - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Aula criativa. Eu gostaria de:",
        pergunta: "Criar apresentações ou relatórios digitais com um design dinâmico e interativo.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Sway"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Word"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Power Point"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Flip"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! O Sway é uma ferramenta que permite criar apresentações e relatórios digitais com um design dinâmico e interativo, proporcionando uma experiência de aprendizado envolvente para os alunos.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-pt/office/introdu%C3%A7%C3%A3o-ao-sway-2076c468-63f4-4a89-ae5f-424796714a8a' target='_blank'>Introdução ao Sway - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Aula criativa. Eu gostaria de:",
        pergunta: "Criar conteúdo educacional em formato de vídeo com recursos interativos.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Flip"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Access"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Word"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Teams"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! O Flip é uma plataforma que permite criar vídeos educacionais interativos, o que pode aumentar o engajamento dos alunos durante o aprendizado. ", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://learn.microsoft.com/pt-br/training/educator-center/product-guides/flip' target='_blank'>Flip no Microsoft Learn | Microsoft Learn</a>"
            
        }
    },
    {
        titulo: "Colaboração. Eu gostaria de:",
        pergunta: "Facilitar a comunicação e colaboração entre professores e alunos.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Teams"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Power Point"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Sway"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Flip"
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! O Teams oferece um ambiente completo para comunicação e colaboração entre professores e alunos, facilitando o trabalho em equipe e a troca de informações durante as aulas.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://learn.microsoft.com/pt-br/training/paths/get-started-managing-microsoft-teams/' target='_blank'>MS-700 Introdução ao gerenciamento do Microsoft Teams - Training | Microsoft Learn</a>"
            
        }
    },
    {
        titulo: "Colaboração. Eu gostaria de:",
        pergunta: "Facilitar a colaboração visual em tempo real durante as aulas.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Sway"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Power Point"
            },
            {
                botao: "c",
                validacao: true,
                texto: "Whiteboard"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Word"
            },
        ],
        feedbacks: {
            
            positivo: "O Whiteboard é uma ferramenta que permite a colaboração visual em tempo real durante as aulas, proporcionando um ambiente interativo para compartilhar ideias e resolver problemas.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/introdu%C3%A7%C3%A3o-ao-microsoft-whiteboard-48cab0ee-90b3-483a-9a48-ff17fe476c6b' target='_blank'>Introdução ao Microsoft Whiteboard - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Colaboração. Eu gostaria de:",
        pergunta: "Compartilhar vídeos educacionais.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Stream"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Word"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Sway"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Flip"
            },
        ],
        feedbacks: {
            
            positivo: "O Stream é uma plataforma que permite hospedar e compartilhar vídeos educacionais, oferecendo uma maneira conveniente de acessar conteúdo de vídeo relacionado ao ensino.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/como-inserir-v%C3%ADdeos-do-stream-no-loop-e-no-outlook-1b123f5e-2607-4b17-a44a-c62cff6a728b' target='_blank'>Como inserir vídeos do Stream no Loop e no Outlook - Suporte da Microsoft</a>"
            
        }
    },
    {
        titulo: "Colaboração. Eu gostaria de:",
        pergunta: "Criar jogos virtuais em 3D.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Stream"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Hacking STEM"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Flip"
            },
            {
                botao: "d",
                validacao: true,
                texto: "Minecraft"
            },
        ],
        feedbacks: {
            
            positivo: "Você está arrasando! O Minecrafit foi criado para ajudar no desenvolvimento de atividades e proporcionar um aprendizado mais imersivo e divertido, através da criação de mundos virtuais.", 
            negativo: "A resposta não está correta. Talvez seja interessante rever o conteúdo: <a href='https://support.microsoft.com/pt-br/office/como-inserir-v%C3%ADdeos-do-stream-no-loop-e-no-outlook-1b123f5e-2607-4b17-a44a-c62cff6a728b' target='_blank'>Minecraft Education no Microsoft Learn | Microsoft Learn</a>"
            
        }
    },
    {
        titulo: "Colaboração. Eu gostaria de:",
        pergunta: "Criar jogos virtuais em 3D.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Hacking STEM"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Teams"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Sway"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Loop"
            },
        ],
        feedbacks: {
            
            positivo: "Perfeito! O STEM oferece uma variedade de projetos práticos e experimentos científicos que podem ser realizados com equipamentos simples. Isso valoriza a criatividade, a inovação e as habilidades manuais, inserindo-se no contexto do movimento maker.", 
            negativo: "A resposta não está correta."
            
        }
    },
    
   
  
  
]