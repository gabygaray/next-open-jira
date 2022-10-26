interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData = {
  entries: [
    {
      description:
        "Pendiente: Dolore eiusmod nisi dolore laborum laborum veniam qui.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En-Progreso: Non laborum cupidatat veniam et commodo dolor nulla adipisicing irure consequat sunt ad eu.",
      status: "in-progress",
      createdAt: Date.now() - 100000000,
    },
    {
      description:
        "Terminadas: Eu eu consequat sint anim sint sit commodo nisi qui cillum tempor nisi duis.",
      status: "finished",
      createdAt: Date.now() - 1000000,
    },
  ],
};
