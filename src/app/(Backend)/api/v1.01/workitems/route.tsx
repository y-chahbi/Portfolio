import { NextResponse } from 'next/server';





export async function GET() {
    return NextResponse.json(
        [
            {
                "image": "https://i.ibb.co/cDh5vZb/modern-sleek-user-interface-for-a-full-stack-web-application-with-real-time-chat-elements-gaming-sys.jpg",
                "title": "ft_transcendence",
                "description": "A full-stack web application featuring real-time chat and game system with authentication, user interactions, and social features.",
                "deskUrls": [
                    "https://ft_transcendence.example.com",
                    "https://github.com/yourusername/ft_transcendence"
                ],
                "languages": ["TypeScript", "React.js", "Tailwind css", "WebSockets"],
                "projectLink": [
                    "https://ft_transcendence.example.com",
                    "https://github.com/yourusername/ft_transcendence"
                ],
                "index": 1
            },
            {
                "image": "https://i.ibb.co/q9xn1B3/minishell-project-with-terminal-commands-and-minishell-for-ychahbi.jpg",
                "title": "minishell",
                "description": "The Minishell project involves creating a simple shell, akin to bash, where you'll delve into processes and file descriptors. The project encapsulates the evolution of shell programming and offers hands-on experience in managing command-line interfaces.",
                "deskUrls": [
                    "https://minishell.example.com",
                    "https://github.com/yourusername/minishell"
                ],
                "languages": ["C Programming", "Shell", "Makefile"],
                "projectLink": [
                    "https://minishell.example.com",
                    "https://github.com/yourusername/minishell"
                ],
                "index": 2
            },
            {
                "image": "https://i.ibb.co/4K3rHz7/DALL-E-2024-10-20-15-38-01-A-detailed-3-D-game-engine-scene-featuring-raycasting-techniques-reminisc.webp",
                "title": "cub3d",
                "description": "A 3D game engine built using raycasting techniques, inspired by Wolfenstein 3D, featuring dynamic environments and player interactions.",
                "deskUrls": [
                    "https://cub3d.example.com",
                    "https://github.com/yourusername/cub3d"
                ],
                "languages": ["C Programming",
                "Ray-Casting",
                "Graphics Programming"],
                "projectLink": [
                    "https://cub3d.example.com",
                    "https://github.com/yourusername/cub3d"
                ],
                "index": 3
            },
            {
                "image": "https://i.ibb.co/LdSfbYW/DALL-E-2024-10-20-15-42-18-An-illustration-representing-an-IRC-server-The-scene-includes-a-computer.webp",
                "title": "ft_irc",
                "description": "This project is about creating your own IRC server. You will use an actual IRC client to connect to your server and test it. The server must handle multiple clients simultaneously without crashing, using non-blocking I/O and a single poll() for operations. It allows for user authentication, nickname setting, channel joining, and private messaging. Operators have special privileges like KICK, INVITE, TOPIC, and MODE commands.",
                "deskUrls": [
                    "https://ft_irc.example.com",
                    "https://github.com/yourusername/ft_irc"
                ],
                "languages": ["C++98",
                "Socket Programming"],
                "projectLink": [
                    "https://ft_irc.example.com",
                    "https://github.com/yourusername/ft_irc"
                ],
                "index": 4
            },
            {
                "image": "https://i.ibb.co/fvhfLqz/DALL-E-2024-10-20-15-40-18-A-visually-engaging-illustration-depicting-the-Dining-Philosophers-proble.webp",
                "title": "Philosophers",
                "description": "The Philosophers project simulates a classic synchronization problem involving multiple philosophers sitting around a table with a bowl of spaghetti and forks. Each philosopher alternates between eating, thinking, and sleeping while adhering to specific rules to avoid starvation. The project emphasizes concurrency and multithreading concepts, showcasing how philosophers can access shared resources (forks) using synchronization mechanisms.",
                "deskUrls": [
                    "https://philosophers.example.com",
                    "https://github.com/yourusername/philosophers"
                ],
                    "languages": ["C Programming", "Multithreading"
                ],
                "projectLink": [
                    "https://philosophers.example.com",
                    "https://github.com/yourusername/philosophers"
                ],
                "index": 5
            }
        ]
    );
}