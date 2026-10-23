
export type CatalogItem = {
  id: string;
  type: string;
  title: string;
  category: string;
  genres: string[];
  trending: boolean;
  rating_count: number;
  rating_stars: number;
  content_rating: string;
  release_year: number;
  duration_sec: number;
  images: {
    poster_16x9: string;
  };
  sources: Array<{
    type: string;
    url: string;
  }>;
  description: string;
};

export type CatalogResponse = {
  catalog_version: string;
  updated_at: string;
  items: CatalogItem[];
};

export type CardData = {
  id: string | number;
  title: string;
  description: string;
  headerImage: string;
  movie: string;
  duration?: number;
  category?: string;
  genres?: string[];
  releaseYear?: number;
  rating?: number;
  ratingCount?: number;
  contentRating?: string;
  trending?: boolean;
};

const workoutImage =
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1280';

const workoutVideo =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';

export const transformCatalogItem = (item: CatalogItem): CardData => {
  const videoSource = item.sources.find(
    source => source.type === 'video/mp4',
  ) || item.sources[0];

  return {
    id: item.id,
    title: item.title,
    description: item.description,
    headerImage: item.images.poster_16x9,
    movie: videoSource?.url || '',
    duration: item.duration_sec,
    category: item.category,
    genres: item.genres,
    releaseYear: item.release_year,
    rating: item.rating_stars,
    ratingCount: item.rating_count,
    contentRating: item.content_rating,
    trending: item.trending,
  };
};

export const fetchMoviesData = async (): Promise<CardData[]> => {
  return [
    {
      id: '1',
      title: 'Full Body Starter',
      description:
        'Start your fitness journey with a beginner-friendly full-body movement session.',
      headerImage: workoutImage,
      movie: workoutVideo,
      duration: 600,
      category: 'Beginner',
      genres: ['Full Body', 'Beginner'],
      releaseYear: 2026,
      trending: true,
    },
    {
      id: '2',
      title: 'Cardio Blast',
      description:
        'A lively cardio session designed to get you moving at your own pace.',
      headerImage: workoutImage,
      movie: workoutVideo,
      duration: 900,
      category: 'Cardio',
      genres: ['Cardio', 'Fitness'],
      releaseYear: 2026,
      trending: true,
    },
    {
      id: '3',
      title: 'Relaxing Yoga',
      description:
        'Take a break with gentle stretching and mindful movement.',
      headerImage: workoutImage,
      movie: workoutVideo,
      duration: 720,
      category: 'Yoga',
      genres: ['Yoga', 'Flexibility'],
      releaseYear: 2026,
      trending: false,
    },
    {
      id: '4',
      title: 'Strength Basics',
      description:
        'Explore foundational strength exercises and build a consistent routine.',
      headerImage: workoutImage,
      movie: workoutVideo,
      duration: 900,
      category: 'Strength',
      genres: ['Strength', 'Beginner'],
      releaseYear: 2026,
      trending: false,
    },
    {
      id: '5',
      title: 'Morning Mobility',
      description:
        'Wake up your body with a simple mobility and stretching session.',
      headerImage: workoutImage,
      movie: workoutVideo,
      duration: 600,
      category: 'Stretching',
      genres: ['Mobility', 'Stretching'],
      releaseYear: 2026,
      trending: true,
    },
  ];
};

export const moviesData: CardData[] = [];
