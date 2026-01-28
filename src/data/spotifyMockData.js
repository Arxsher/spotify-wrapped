// Comprehensive Spotify Mock Data for Analytics Dashboard

export const mockUser = {
  id: 'user_12345',
  display_name: 'Alex Rivera',
  email: 'alex.rivera@email.com',
  country: 'US',
  followers: 1247,
  following: 892,
  images: [
    { url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=256&h=256&fit=crop' }
  ],
  product: 'premium',
  member_since: '2018-03-15'
};

export const mockTopTracks = [
  {
    id: 't1',
    name: 'Blinding Lights',
    artists: [{ id: 'a1', name: 'The Weeknd' }],
    album: { id: 'al1', name: 'After Hours', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' }] },
    duration_ms: 200040,
    popularity: 95,
    played_count: 347,
    explicit: false,
    audio_features: { danceability: 0.514, energy: 0.730, valence: 0.334, tempo: 171.005 }
  },
  {
    id: 't2',
    name: 'As It Was',
    artists: [{ id: 'a2', name: 'Harry Styles' }],
    album: { id: 'al2', name: "Harry's House", images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14' }] },
    duration_ms: 167303,
    popularity: 92,
    played_count: 289,
    explicit: false,
    audio_features: { danceability: 0.520, energy: 0.731, valence: 0.662, tempo: 173.930 }
  },
  {
    id: 't3',
    name: 'Anti-Hero',
    artists: [{ id: 'a3', name: 'Taylor Swift' }],
    album: { id: 'al3', name: 'Midnights', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5' }] },
    duration_ms: 200690,
    popularity: 94,
    played_count: 256,
    explicit: false,
    audio_features: { danceability: 0.637, energy: 0.643, valence: 0.533, tempo: 97.008 }
  },
  {
    id: 't4',
    name: 'Vampire',
    artists: [{ id: 'a4', name: 'Olivia Rodrigo' }],
    album: { id: 'al4', name: 'GUTS', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d' }] },
    duration_ms: 219724,
    popularity: 91,
    played_count: 234,
    explicit: true,
    audio_features: { danceability: 0.511, energy: 0.532, valence: 0.320, tempo: 138.048 }
  },
  {
    id: 't5',
    name: 'Flowers',
    artists: [{ id: 'a5', name: 'Miley Cyrus' }],
    album: { id: 'al5', name: 'Endless Summer Vacation', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d' }] },
    duration_ms: 200455,
    popularity: 93,
    played_count: 312,
    explicit: false,
    audio_features: { danceability: 0.707, energy: 0.681, valence: 0.647, tempo: 117.999 }
  },
  {
    id: 't6',
    name: 'Starboy',
    artists: [{ id: 'a1', name: 'The Weeknd' }, { id: 'a6', name: 'Daft Punk' }],
    album: { id: 'al6', name: 'Starboy', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452' }] },
    duration_ms: 230453,
    popularity: 89,
    played_count: 198,
    explicit: true,
    audio_features: { danceability: 0.679, energy: 0.587, valence: 0.486, tempo: 186.003 }
  },
  {
    id: 't7',
    name: 'Cruel Summer',
    artists: [{ id: 'a3', name: 'Taylor Swift' }],
    album: { id: 'al7', name: 'Lover', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }] },
    duration_ms: 178427,
    popularity: 90,
    played_count: 276,
    explicit: false,
    audio_features: { danceability: 0.552, energy: 0.702, valence: 0.564, tempo: 169.994 }
  },
  {
    id: 't8',
    name: 'Shape of You',
    artists: [{ id: 'a7', name: 'Ed Sheeran' }],
    album: { id: 'al8', name: 'Divide', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96' }] },
    duration_ms: 233713,
    popularity: 88,
    played_count: 187,
    explicit: false,
    audio_features: { danceability: 0.825, energy: 0.652, valence: 0.931, tempo: 95.977 }
  },
  {
    id: 't9',
    name: 'Stay',
    artists: [{ id: 'a14', name: 'The Kid LAROI' }, { id: 'a15', name: 'Justin Bieber' }],
    album: { id: 'al9', name: 'F*ck Love 3', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d' }] },
    duration_ms: 141000,
    popularity: 87,
    played_count: 245,
    explicit: false,
    audio_features: { danceability: 0.702, energy: 0.825, valence: 0.915, tempo: 102.977 }
  },
  {
    id: 't10',
    name: 'Watermelon Sugar',
    artists: [{ id: 'a2', name: 'Harry Styles' }],
    album: { id: 'al10', name: 'Fine Line', images: [{ url: 'https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a' }] },
    duration_ms: 174000,
    popularity: 86,
    played_count: 221,
    explicit: false,
    audio_features: { danceability: 0.548, energy: 0.816, valence: 0.557, tempo: 95.390 }
  }
];

export const mockTopArtists = [
  {
    id: 'a1',
    name: 'The Weeknd',
    genres: ['canadian contemporary r&b', 'canadian pop', 'pop'],
    followers: 85234567,
    popularity: 96,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb' }],
    monthly_listeners: 78453210,
    played_count: 748
  },
  {
    id: 'a3',
    name: 'SZA',
    genres: ['pop', 'r&b', 'neo soul'],
    followers: 92145678,
    popularity: 98,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5eb0895066d172e1f51f520bc65' }],
    monthly_listeners: 82341567,
    played_count: 532
  },
  {
    id: 'a2',
    name: 'Harry Styles',
    genres: ['pop', 'uk pop'],
    followers: 45678234,
    popularity: 91,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb' }],
    monthly_listeners: 56789123,
    played_count: 510
  },
  {
    id: 'a4',
    name: 'Post Malone',
    genres: ['pop', 'hip hop', 'trap'],
    followers: 34567890,
    popularity: 89,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5ebe17c0aa1714a03d62b5ce4e0' }],
    monthly_listeners: 45678901,
    played_count: 599
  },
  {
    id: 'a8',
    name: 'Dua Lipa',
    genres: ['dance pop', 'pop', 'uk pop'],
    followers: 41234567,
    popularity: 88,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5eb0c68f6c95232e716f0abee8d' }],
    monthly_listeners: 52341678,
    played_count: 245
  },
  {
    id: 'a9',
    name: 'Billie Eilish',
    genres: ['art pop', 'electropop', 'pop'],
    followers: 67890123,
    popularity: 90,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5ebd8b9980db67272cb4d2c3daf' }],
    monthly_listeners: 61234567,
    played_count: 178
  },
  {
    id: 'a10',
    name: 'Drake',
    genres: ['canadian hip hop', 'canadian pop', 'hip hop', 'pop rap', 'rap'],
    followers: 78901234,
    popularity: 95,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9' }],
    monthly_listeners: 68901234,
    played_count: 165
  },
  {
    id: 'a11',
    name: 'Bruno Mars',
    genres: ['pop', 'r&b', 'funk'],
    followers: 71234567,
    popularity: 94,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd' }],
    monthly_listeners: 62345678,
    played_count: 154
  },
  {
    id: 'a12',
    name: 'Ed Sheeran',
    genres: ['pop', 'uk pop'],
    followers: 112345678,
    popularity: 92,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6' }],
    monthly_listeners: 75678901,
    played_count: 143
  },
  {
    id: 'a13',
    name: 'Ariana Grande',
    genres: ['pop', 'r&b'],
    followers: 90123456,
    popularity: 93,
    images: [{ url: 'https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952' }],
    monthly_listeners: 72345678,
    played_count: 132
  }
];

export const mockRecentlyPlayed = [
  { track: mockTopTracks[0], played_at: '2024-01-09T14:32:00Z', context: { type: 'playlist', name: 'Daily Mix 1' } },
  { track: mockTopTracks[4], played_at: '2024-01-09T14:28:00Z', context: { type: 'album', name: 'Endless Summer Vacation' } },
  { track: mockTopTracks[2], played_at: '2024-01-09T14:24:00Z', context: { type: 'playlist', name: 'Top Hits 2024' } },
  { track: mockTopTracks[8], played_at: '2024-01-09T14:20:00Z', context: { type: 'playlist', name: 'Dance Party' } },
  { track: mockTopTracks[6], played_at: '2024-01-09T14:16:00Z', context: { type: 'artist', name: 'Taylor Swift' } },
  { track: mockTopTracks[1], played_at: '2024-01-09T13:45:00Z', context: { type: 'playlist', name: 'Chill Vibes' } },
  { track: mockTopTracks[9], played_at: '2024-01-09T13:41:00Z', context: { type: 'album', name: 'Fine Line' } },
  { track: mockTopTracks[3], played_at: '2024-01-09T13:37:00Z', context: { type: 'playlist', name: 'New Music Friday' } }
];

export const mockPlaylists = [
  { id: 'pl1', name: 'Liked Songs', description: 'Your favorite tracks', images: [{ url: 'https://misc.scdn.co/liked-songs/liked-songs-300.png' }], tracks: { total: 847 }, public: false },
  { id: 'pl2', name: 'Workout Motivation', description: 'High energy tracks', images: [{ url: 'https://i.scdn.co/image/ab67706c0000bebb72f52e0f8f75c70d3e1f5c27' }], tracks: { total: 156 }, public: true },
  { id: 'pl3', name: 'Chill Evening', description: 'Relaxing tunes', images: [{ url: 'https://i.scdn.co/image/ab67706c0000bebb214f3cf1cbe7139c1e26ffbb' }], tracks: { total: 89 }, public: true },
  { id: 'pl4', name: 'Road Trip Mix', description: 'Perfect for long drives', images: [{ url: 'https://i.scdn.co/image/ab67706c0000bebb51f52e0f8f75c70d3e1f5c27' }], tracks: { total: 234 }, public: true },
  { id: 'pl5', name: 'My Wrapped', description: 'Your top songs', images: [{ url: 'https://i.scdn.co/image/ab67706c0000bebbb7b4a29eb4a1e9e4f2d1c3a5' }], tracks: { total: 100 }, public: false }
];

export const mockGenreDistribution = [
  { genre: 'Pop', percentage: 34, color: '#1DB954', tracks: 412, minutes: 1847 },
  { genre: 'R&B', percentage: 18, color: '#1ed760', tracks: 218, minutes: 983 },
  { genre: 'Hip-Hop', percentage: 15, color: '#169c46', tracks: 182, minutes: 821 },
  { genre: 'Indie', percentage: 12, color: '#14833c', tracks: 145, minutes: 654 },
  { genre: 'Rock', percentage: 9, color: '#0d5c2a', tracks: 109, minutes: 491 },
  { genre: 'Electronic', percentage: 7, color: '#0a471f', tracks: 85, minutes: 383 },
  { genre: 'Other', percentage: 5, color: '#073214', tracks: 61, minutes: 274 }
];

export const mockAudioFeaturesAverage = {
  danceability: 0.64,
  energy: 0.67,
  valence: 0.58,
  acousticness: 0.22,
  instrumentalness: 0.02,
  speechiness: 0.08,
  liveness: 0.15,
  tempo: 124.5
};

export const mockListeningStats = {
  totalMinutesThisMonth: 4532,
  totalMinutesLastMonth: 3987,
  totalMinutesAllTime: 89453,
  averageMinutesPerDay: 146,
  totalTracksPlayed: 3247,
  uniqueArtists: 342,
  uniqueTracks: 1876,
  topListeningHour: 21,
  topListeningDay: 'Saturday',
  listeningStreak: 47,
  newDiscoveriesThisMonth: 89,
  percentageChange: 13.7
};

export const mockMonthlyTrend = [
  { month: 'Aug', minutes: 3245, tracks: 1087 },
  { month: 'Sep', minutes: 3567, tracks: 1192 },
  { month: 'Oct', minutes: 3890, tracks: 1301 },
  { month: 'Nov', minutes: 3654, tracks: 1221 },
  { month: 'Dec', minutes: 4123, tracks: 1378 },
  { month: 'Jan', minutes: 4532, tracks: 1514 }
];

export const mockTimeRanges = {
  short_term: {
    label: 'Last 4 Weeks',
    topTracks: mockTopTracks.slice(0, 8),
    topArtists: mockTopArtists.slice(0, 4),
    totalMinutes: 1847
  },
  medium_term: {
    label: 'Last 6 Months',
    topTracks: mockTopTracks,
    topArtists: mockTopArtists,
    totalMinutes: 23456
  },
  long_term: {
    label: 'All Time',
    topTracks: mockTopTracks,
    topArtists: mockTopArtists,
    totalMinutes: 89453
  }
};

export const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const formatNumber = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
};

// Extended album data for detail pages
export const mockAlbums = [
  {
    id: 'al1',
    name: 'After Hours',
    artist: { id: 'a1', name: 'The Weeknd' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' }],
    release_date: '2020-03-20',
    total_tracks: 14,
    label: 'XO / Republic Records',
    popularity: 92,
    tracks: [
      { id: 't1', name: 'Blinding Lights', duration_ms: 200040, track_number: 1 },
      { id: 'al1t2', name: 'Alone Again', duration_ms: 250000, track_number: 2 },
      { id: 'al1t3', name: 'Too Late', duration_ms: 239000, track_number: 3 },
      { id: 'al1t4', name: 'Hardest To Love', duration_ms: 210000, track_number: 4 },
      { id: 'al1t5', name: 'Scared To Live', duration_ms: 189000, track_number: 5 },
      { id: 'al1t6', name: 'Snowchild', duration_ms: 243000, track_number: 6 },
      { id: 'al1t7', name: 'Escape From LA', duration_ms: 357000, track_number: 7 },
      { id: 'al1t8', name: 'Heartless', duration_ms: 198000, track_number: 8 },
      { id: 'al1t9', name: 'Faith', duration_ms: 284000, track_number: 9 },
      { id: 'al1t10', name: 'In Your Eyes', duration_ms: 237000, track_number: 10 },
      { id: 'al1t11', name: 'Save Your Tears', duration_ms: 215000, track_number: 11 },
      { id: 'al1t12', name: 'Repeat After Me', duration_ms: 193000, track_number: 12 },
      { id: 'al1t13', name: 'After Hours', duration_ms: 361000, track_number: 13 },
      { id: 'al1t14', name: 'Until I Bleed Out', duration_ms: 189000, track_number: 14 }
    ]
  },
  {
    id: 'al2',
    name: "Harry's House",
    artist: { id: 'a2', name: 'Harry Styles' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14' }],
    release_date: '2022-05-20',
    total_tracks: 13,
    label: 'Columbia Records',
    popularity: 89,
    tracks: [
      { id: 'al2t1', name: 'Music For a Sushi Restaurant', duration_ms: 194000, track_number: 1 },
      { id: 'al2t2', name: 'Late Night Talking', duration_ms: 178000, track_number: 2 },
      { id: 'al2t3', name: 'Grapejuice', duration_ms: 196000, track_number: 3 },
      { id: 't2', name: 'As It Was', duration_ms: 167303, track_number: 4 },
      { id: 'al2t5', name: 'Daylight', duration_ms: 163000, track_number: 5 },
      { id: 'al2t6', name: 'Little Freak', duration_ms: 202000, track_number: 6 },
      { id: 'al2t7', name: 'Matilda', duration_ms: 245000, track_number: 7 },
      { id: 'al2t8', name: 'Cinema', duration_ms: 244000, track_number: 8 },
      { id: 'al2t9', name: 'Daydreaming', duration_ms: 191000, track_number: 9 },
      { id: 'al2t10', name: 'Keep Driving', duration_ms: 142000, track_number: 10 },
      { id: 'al2t11', name: 'Satellite', duration_ms: 306000, track_number: 11 },
      { id: 'al2t12', name: 'Boyfriends', duration_ms: 187000, track_number: 12 },
      { id: 'al2t13', name: 'Love Of My Life', duration_ms: 189000, track_number: 13 }
    ]
  },
  {
    id: 'al3',
    name: 'Midnights',
    artist: { id: 'a3', name: 'Taylor Swift' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5' }],
    release_date: '2022-10-21',
    total_tracks: 13,
    label: 'Republic Records',
    popularity: 94,
    tracks: [
      { id: 'al3t1', name: 'Lavender Haze', duration_ms: 202000, track_number: 1 },
      { id: 'al3t2', name: 'Maroon', duration_ms: 218000, track_number: 2 },
      { id: 't3', name: 'Anti-Hero', duration_ms: 200690, track_number: 3 },
      { id: 'al3t4', name: 'Snow On The Beach', duration_ms: 256000, track_number: 4 },
      { id: 'al3t5', name: "You're On Your Own, Kid", duration_ms: 194000, track_number: 5 },
      { id: 'al3t6', name: 'Midnight Rain', duration_ms: 175000, track_number: 6 },
      { id: 'al3t7', name: 'Question...?', duration_ms: 210000, track_number: 7 },
      { id: 'al3t8', name: 'Vigilante Shit', duration_ms: 165000, track_number: 8 },
      { id: 'al3t9', name: 'Bejeweled', duration_ms: 194000, track_number: 9 },
      { id: 'al3t10', name: 'Labyrinth', duration_ms: 249000, track_number: 10 },
      { id: 'al3t11', name: 'Karma', duration_ms: 204000, track_number: 11 },
      { id: 'al3t12', name: 'Sweet Nothing', duration_ms: 187000, track_number: 12 },
      { id: 'al3t13', name: 'Mastermind', duration_ms: 212000, track_number: 13 }
    ]
  },
  {
    id: 'al4',
    name: 'GUTS',
    artist: { id: 'a4', name: 'Olivia Rodrigo' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d' }],
    release_date: '2023-09-08',
    total_tracks: 12,
    label: 'Geffen Records',
    popularity: 91,
    tracks: [
      { id: 'al4t1', name: 'all-american bitch', duration_ms: 165000, track_number: 1 },
      { id: 'al4t2', name: 'bad idea right?', duration_ms: 185000, track_number: 2 },
      { id: 't4', name: 'vampire', duration_ms: 219724, track_number: 3 },
      { id: 'al4t4', name: 'lacy', duration_ms: 178000, track_number: 4 },
      { id: 'al4t5', name: 'ballad of a homeschooled girl', duration_ms: 202000, track_number: 5 },
      { id: 'al4t6', name: 'making the bed', duration_ms: 195000, track_number: 6 },
      { id: 'al4t7', name: 'logical', duration_ms: 240000, track_number: 7 },
      { id: 'al4t8', name: 'get him back!', duration_ms: 211000, track_number: 8 },
      { id: 'al4t9', name: 'love is embarrassing', duration_ms: 145000, track_number: 9 },
      { id: 'al4t10', name: 'the grudge', duration_ms: 198000, track_number: 10 },
      { id: 'al4t11', name: 'pretty isn\'t pretty', duration_ms: 210000, track_number: 11 },
      { id: 'al4t12', name: 'teenage dream', duration_ms: 230000, track_number: 12 }
    ]
  },
  {
    id: 'al5',
    name: 'Endless Summer Vacation',
    artist: { id: 'a5', name: 'Miley Cyrus' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d' }],
    release_date: '2023-03-10',
    total_tracks: 13,
    label: 'Columbia Records',
    popularity: 87,
    tracks: [
      { id: 't5', name: 'Flowers', duration_ms: 200455, track_number: 1 },
      { id: 'al5t2', name: 'Jaded', duration_ms: 183000, track_number: 2 },
      { id: 'al5t3', name: 'Rose Colored Lenses', duration_ms: 198000, track_number: 3 },
      { id: 'al5t4', name: 'Thousand Miles', duration_ms: 187000, track_number: 4 },
      { id: 'al5t5', name: 'You', duration_ms: 168000, track_number: 5 },
      { id: 'al5t6', name: 'Handstand', duration_ms: 181000, track_number: 6 },
      { id: 'al5t7', name: 'River', duration_ms: 214000, track_number: 7 },
      { id: 'al5t8', name: 'Violet Chemistry', duration_ms: 179000, track_number: 8 },
      { id: 'al5t9', name: 'Muddy Feet', duration_ms: 168000, track_number: 9 },
      { id: 'al5t10', name: 'Wildcard', duration_ms: 193000, track_number: 10 },
      { id: 'al5t11', name: 'Island', duration_ms: 195000, track_number: 11 },
      { id: 'al5t12', name: 'Wonder Woman', duration_ms: 251000, track_number: 12 },
      { id: 'al5t13', name: 'Never Be Me', duration_ms: 258000, track_number: 13 }
    ]
  },
  {
    id: 'al6',
    name: 'Starboy',
    artist: { id: 'a1', name: 'The Weeknd' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452' }],
    release_date: '2016-11-25',
    total_tracks: 18,
    label: 'XO / Republic Records',
    popularity: 88,
    tracks: [
      { id: 't6', name: 'Starboy', duration_ms: 230453, track_number: 1 },
      { id: 'al6t2', name: 'Party Monster', duration_ms: 242000, track_number: 2 },
      { id: 'al6t3', name: 'False Alarm', duration_ms: 227000, track_number: 3 },
      { id: 'al6t4', name: 'Reminder', duration_ms: 221000, track_number: 4 },
      { id: 'al6t5', name: 'Rockin\'', duration_ms: 213000, track_number: 5 },
      { id: 'al6t6', name: 'Secrets', duration_ms: 265000, track_number: 6 },
      { id: 'al6t7', name: 'True Colors', duration_ms: 229000, track_number: 7 },
      { id: 'al6t8', name: 'Stargirl Interlude', duration_ms: 111000, track_number: 8 },
      { id: 'al6t9', name: 'Sidewalks', duration_ms: 232000, track_number: 9 },
      { id: 'al6t10', name: 'Six Feet Under', duration_ms: 229000, track_number: 10 },
      { id: 'al6t11', name: 'Love To Lay', duration_ms: 232000, track_number: 11 },
      { id: 'al6t12', name: 'A Lonely Night', duration_ms: 231000, track_number: 12 },
      { id: 'al6t13', name: 'Attention', duration_ms: 196000, track_number: 13 },
      { id: 'al6t14', name: 'Ordinary Life', duration_ms: 258000, track_number: 14 },
      { id: 'al6t15', name: 'Nothing Without You', duration_ms: 197000, track_number: 15 },
      { id: 'al6t16', name: 'All I Know', duration_ms: 321000, track_number: 16 },
      { id: 'al6t17', name: 'Die For You', duration_ms: 260000, track_number: 17 },
      { id: 'al6t18', name: 'I Feel It Coming', duration_ms: 269000, track_number: 18 }
    ]
  },
  {
    id: 'al7',
    name: 'Lover',
    artist: { id: 'a3', name: 'Taylor Swift' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }],
    release_date: '2019-08-23',
    total_tracks: 18,
    label: 'Republic Records',
    popularity: 90,
    tracks: [
      { id: 'al7t1', name: 'I Forgot That You Existed', duration_ms: 171000, track_number: 1 },
      { id: 't7', name: 'Cruel Summer', duration_ms: 178427, track_number: 2 },
      { id: 'al7t3', name: 'Lover', duration_ms: 221000, track_number: 3 },
      { id: 'al7t4', name: 'The Man', duration_ms: 190000, track_number: 4 },
      { id: 'al7t5', name: 'The Archer', duration_ms: 231000, track_number: 5 },
      { id: 'al7t6', name: 'I Think He Knows', duration_ms: 170000, track_number: 6 },
      { id: 'al7t7', name: 'Miss Americana', duration_ms: 233000, track_number: 7 },
      { id: 'al7t8', name: 'Paper Rings', duration_ms: 222000, track_number: 8 },
      { id: 'al7t9', name: 'Cornelia Street', duration_ms: 287000, track_number: 9 },
      { id: 'al7t10', name: 'Death By A Thousand Cuts', duration_ms: 198000, track_number: 10 },
      { id: 'al7t11', name: 'London Boy', duration_ms: 190000, track_number: 11 },
      { id: 'al7t12', name: 'Soon You\'ll Get Better', duration_ms: 210000, track_number: 12 },
      { id: 'al7t13', name: 'False God', duration_ms: 201000, track_number: 13 },
      { id: 'al7t14', name: 'You Need To Calm Down', duration_ms: 171000, track_number: 14 },
      { id: 'al7t15', name: 'Afterglow', duration_ms: 229000, track_number: 15 },
      { id: 'al7t16', name: 'ME!', duration_ms: 193000, track_number: 16 },
      { id: 'al7t17', name: 'It\'s Nice To Have A Friend', duration_ms: 156000, track_number: 17 },
      { id: 'al7t18', name: 'Daylight', duration_ms: 293000, track_number: 18 }
    ]
  },
  {
    id: 'al8',
    name: 'Divide',
    artist: { id: 'a7', name: 'Ed Sheeran' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96' }],
    release_date: '2017-03-03',
    total_tracks: 16,
    label: 'Asylum Records',
    popularity: 88,
    tracks: [
      { id: 'al8t1', name: 'Eraser', duration_ms: 227000, track_number: 1 },
      { id: 'al8t2', name: 'Castle on the Hill', duration_ms: 261000, track_number: 2 },
      { id: 'al8t3', name: 'Dive', duration_ms: 238000, track_number: 3 },
      { id: 't8', name: 'Shape of You', duration_ms: 233713, track_number: 4 },
      { id: 'al8t5', name: 'Perfect', duration_ms: 263000, track_number: 5 },
      { id: 'al8t6', name: 'Galway Girl', duration_ms: 170000, track_number: 6 },
      { id: 'al8t7', name: 'Happier', duration_ms: 207000, track_number: 7 },
      { id: 'al8t8', name: 'New Man', duration_ms: 189000, track_number: 8 },
      { id: 'al8t9', name: 'Hearts Don\'t Break Around Here', duration_ms: 250000, track_number: 9 },
      { id: 'al8t10', name: 'What Do I Know?', duration_ms: 237000, track_number: 10 },
      { id: 'al8t11', name: 'How Would You Feel', duration_ms: 280000, track_number: 11 },
      { id: 'al8t12', name: 'Supermarket Flowers', duration_ms: 223000, track_number: 12 },
      { id: 'al8t13', name: 'Barcelona', duration_ms: 195000, track_number: 13 },
      { id: 'al8t14', name: 'Bibia Be Ye Ye', duration_ms: 178000, track_number: 14 },
      { id: 'al8t15', name: 'Nancy Mulligan', duration_ms: 177000, track_number: 15 },
      { id: 'al8t16', name: 'Save Myself', duration_ms: 246000, track_number: 16 }
    ]
  },
  {
    id: 'al9',
    name: "F*ck Love 3",
    artist: { id: 'a14', name: 'The Kid LAROI' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d' }],
    release_date: '2021-07-23',
    total_tracks: 11,
    label: 'Columbia Records',
    popularity: 85,
    tracks: [
      { id: 't9', name: 'Stay', duration_ms: 141000, track_number: 1 },
      { id: 'al9t2', name: 'Thousand Miles', duration_ms: 168000, track_number: 2 },
      { id: 'al9t3', name: 'Not Sober', duration_ms: 165000, track_number: 3 },
      { id: 'al9t4', name: 'Without You', duration_ms: 161000, track_number: 4 },
      { id: 'al9t5', name: 'Still Chose You', duration_ms: 184000, track_number: 5 },
      { id: 'al9t6', name: 'Selfish', duration_ms: 138000, track_number: 6 },
      { id: 'al9t7', name: 'Same Energy', duration_ms: 161000, track_number: 7 },
      { id: 'al9t8', name: 'Maybe', duration_ms: 147000, track_number: 8 },
      { id: 'al9t9', name: 'So Done', duration_ms: 180000, track_number: 9 },
      { id: 'al9t10', name: 'Tragic', duration_ms: 205000, track_number: 10 },
      { id: 'al9t11', name: 'Over You', duration_ms: 158000, track_number: 11 }
    ]
  },
  {
    id: 'al10',
    name: 'Fine Line',
    artist: { id: 'a2', name: 'Harry Styles' },
    images: [{ url: 'https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a' }],
    release_date: '2019-12-13',
    total_tracks: 12,
    label: 'Columbia Records',
    popularity: 90,
    tracks: [
      { id: 'al10t1', name: 'Golden', duration_ms: 208000, track_number: 1 },
      { id: 't10', name: 'Watermelon Sugar', duration_ms: 174000, track_number: 2 },
      { id: 'al10t3', name: 'Adore You', duration_ms: 207000, track_number: 3 },
      { id: 'al10t4', name: 'Lights Up', duration_ms: 172000, track_number: 4 },
      { id: 'al10t5', name: 'Cherry', duration_ms: 259000, track_number: 5 },
      { id: 'al10t6', name: 'Falling', duration_ms: 240000, track_number: 6 },
      { id: 'al10t7', name: 'To Be So Lonely', duration_ms: 191000, track_number: 7 },
      { id: 'al10t8', name: 'She', duration_ms: 360000, track_number: 8 },
      { id: 'al10t9', name: 'Sunflower, Vol. 6', duration_ms: 221000, track_number: 9 },
      { id: 'al10t10', name: 'Canyon Moon', duration_ms: 189000, track_number: 10 },
      { id: 'al10t11', name: 'Treat People With Kindness', duration_ms: 197000, track_number: 11 },
      { id: 'al10t12', name: 'Fine Line', duration_ms: 378000, track_number: 12 }
    ]
  }
];

// Extended artist data with top tracks for detail pages
export const artistTopTracks = {
  'a1': [ // The Weeknd
    { id: 't1', name: 'Blinding Lights', plays: 4200000000 },
    { id: 't6', name: 'Starboy', plays: 2800000000 },
    { id: 'a1t3', name: 'Save Your Tears', plays: 2600000000 },
    { id: 'a1t4', name: 'Die For You', plays: 2400000000 },
    { id: 'a1t5', name: 'The Hills', plays: 2100000000 }
  ],
  'a2': [ // Harry Styles
    { id: 't2', name: 'As It Was', plays: 3100000000 },
    { id: 't10', name: 'Watermelon Sugar', plays: 2900000000 },
    { id: 'a2t3', name: 'Adore You', plays: 1800000000 },
    { id: 'a2t4', name: 'Sign of the Times', plays: 1700000000 },
    { id: 'a2t5', name: 'Late Night Talking', plays: 1200000000 }
  ],
  'a3': [ // Taylor Swift / SZA (note: a3 in topArtists is SZA, but in tracks it's Taylor Swift)
    { id: 't3', name: 'Anti-Hero', plays: 2500000000 },
    { id: 't7', name: 'Cruel Summer', plays: 2200000000 },
    { id: 'a3t3', name: 'Shake It Off', plays: 2100000000 },
    { id: 'a3t4', name: 'Blank Space', plays: 2000000000 },
    { id: 'a3t5', name: 'Love Story', plays: 1900000000 }
  ],
  'a4': [ // Olivia Rodrigo / Post Malone
    { id: 't4', name: 'vampire', plays: 1800000000 },
    { id: 'a4t2', name: 'drivers license', plays: 2300000000 },
    { id: 'a4t3', name: 'good 4 u', plays: 2100000000 },
    { id: 'a4t4', name: 'deja vu', plays: 1400000000 },
    { id: 'a4t5', name: 'brutal', plays: 900000000 }
  ],
  'a5': [ // Miley Cyrus
    { id: 't5', name: 'Flowers', plays: 2700000000 },
    { id: 'a5t2', name: 'Wrecking Ball', plays: 1800000000 },
    { id: 'a5t3', name: 'Midnight Sky', plays: 800000000 },
    { id: 'a5t4', name: 'Party in the U.S.A.', plays: 1200000000 },
    { id: 'a5t5', name: 'We Can\'t Stop', plays: 1100000000 }
  ]
};

// Helper functions to get data by ID
export const getArtistById = (id) => {
  return mockTopArtists.find(artist => artist.id === id);
};

export const getTrackById = (id) => {
  return mockTopTracks.find(track => track.id === id);
};

export const getAlbumById = (id) => {
  return mockAlbums.find(album => album.id === id);
};

export const getTracksByArtistId = (artistId) => {
  return mockTopTracks.filter(track => 
    track.artists.some(artist => artist.id === artistId)
  );
};

export const getAlbumsByArtistId = (artistId) => {
  return mockAlbums.filter(album => album.artist.id === artistId);
};

export const getArtistTopTracks = (artistId) => {
  return artistTopTracks[artistId] || [];
};