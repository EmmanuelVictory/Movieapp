
// Sample Data
const movies = [
    {
        id: 1,
        title: "Inception",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
        trailer: "cc/spa/videoPlayPage/movies/inception-e1BOR6f19C7?id=6391474290696802080&type=/movie/detail&detailSe=&detailEp=&lang=en",
        year: 2010,
        genre: ["Action", "Science Fiction", "Thriller"],

        duration: "2h 28m",
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        director: "Christopher Nolan",
        featured: true
    },
    {
        id: 2,
        title: "Breaking Bad",
        type: "series",
        poster: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1920&h=1080&fit=crop",
        year: 2008,
        genre: ["Crime", "Drama", "Thriller"],
        duration: "5 Seasons",
        rating: 9.5,
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        director: "Vince Gilligan",
        featured: true
    },
    {
        id: 3,
        title: "The Dark Knight",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1920&h=1080&fit=crop",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        duration: "2h 32m",
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        director: "Christopher Nolan",
        featured: true
    },
    {
        id: 4,
        title: "Stranger Things",
        type: "series",
        poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=1920&h=1080&fit=crop",
        year: 2016,
        genre: ["Drama", "Fantasy", "Horror"],
        duration: "4 Seasons",
        rating: 8.7,
        description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
        cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
        director: "The Duffer Brothers",
        featured: true
    },
    {
        id: 5,
        title: "Interstellar",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop",
        year: 2014,
        genre: ["Adventure", "Drama", "Science Fiction"],
        duration: "2h 49m",
        rating: 8.6,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        director: "Christopher Nolan",
        featured: true
    },
    {
        id: 6,
        title: "The Hangover",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop",
        year: 2009,
        genre: ["Comedy"],
        duration: "1h 40m",
        rating: 7.7,
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
        director: "Todd Phillips",
        featured: false
    },
    {
        id: 7,
        title: "The Office",
        type: "series",
        poster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop",
        year: 2005,
        genre: ["Comedy"],
        duration: "9 Seasons",
        rating: 9.0,
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        cast: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
        director: "Greg Daniels",
        featured: false
    },
    {
        id: 8,
        title: "Superbad",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1543584756-8f40af09e971?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
        year: 2007,
        genre: ["Comedy"],
        duration: "1h 53m",
        rating: 7.6,
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
        director: "Greg Mottola",
        featured: false
    },
    {
        id: 9,
        title: "Brooklyn Nine-Nine",
        type: "series",
        poster: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=1080&fit=crop",
        year: 2013,
        genre: ["Comedy", "Crime"],
        duration: "8 Seasons",
        rating: 8.4,
        description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
        cast: ["Andy Samberg", "Stephanie Beatriz", "Terry Crews"],
        director: "Dan Goor",
        featured: false
    },
    {
        id: 10,
        title: "Game of Thrones",
        type: "series",
        poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=1920&h=1080&fit=crop",
        year: 2011,
        genre: ["Action", "Adventure", "Drama"],
        duration: "8 Seasons",
        rating: 9.3,
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        cast: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
        director: "David Benioff",
        featured: false
    },
    {
        id: 11,
        title: "The Matrix",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920&h=1080&fit=crop",
        year: 1999,
        genre: ["Action", "Science Fiction"],
        duration: "2h 16m",
        rating: 8.7,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        director: "The Wachowskis",
        featured: false
    },
    {
        id: 12,
        title: "Money Heist",
        type: "series",
        poster: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400&h=600&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=1080&fit=crop",
        year: 2017,
        genre: ["Action", "Crime", "Drama"],
        duration: "5 Seasons",
        rating: 8.3,
        description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history.",
        cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
        director: "Álex Pina",
        featured: false
    }
];

// Sample Reviews
let reviews = [
    { id: 1, movieId: 1, userName: "MovieFan123", rating: 9, title: "Mind-bending masterpiece!", content: "Christopher Nolan has created something truly special.", date: "2024-01-15", helpful: 24 },
    { id: 2, movieId: 1, userName: "CinemaLover", rating: 10, title: "Perfect in every way", content: "This movie changed my perspective on what cinema can achieve.", date: "2024-01-10", helpful: 18 },
    { id: 3, movieId: 2, userName: "SeriesAddict", rating: 10, title: "Greatest TV show ever", content: "Walter White's transformation is one of the best character arcs.", date: "2024-01-08", helpful: 45 }
];

// State
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let currentSlide = 0;
let currentRating = 0;
let currentMovieId = null;
let isLoggedIn = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initCarousels();
    initNavScroll();
    renderBrowseGrid();
    renderWatchlist();
    initRatingStars();
});

// Navigation
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(page + 'Page').classList.add('active');
    document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
    
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function initNavScroll() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    const featured = movies.filter(m => m.featured);
    
    let html = '';
    featured.forEach((movie, index) => {
        html += `
            <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="hero-bg" style="background-image: url('${movie.backdrop}')"></div>
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <div class="hero-info">
                        <div class="hero-badges">
                            <span class="badge badge-type">${movie.type}</span>
                            <span>${movie.year}</span>
                            <span class="badge badge-rating">⭐ ${movie.rating}</span>
                        </div>
                        <h1 class="hero-title">${movie.title}</h1>
                        <div class="hero-genres">${movie.genre.join(' • ')}</div>
                        <p class="hero-description">${movie.description}</p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary btn-lg" onclick="showDetail(${movie.id})">
                                ▶ Watch Now
                            </button>
                            <button class="btn btn-secondary btn-lg" onclick="showDetail(${movie.id})">
                                ℹ More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
        <button class="slider-arrow prev" onclick="prevSlide()">‹</button>
        <button class="slider-arrow next" onclick="nextSlide()">›</button>
        <div class="slider-controls">
            ${featured.map((_, i) => `<button class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>`).join('')}
        </div>
    `;
    
    slider.innerHTML = html;
    
    setInterval(() => {
        nextSlide();
    }, 6000);
}

function nextSlide() {
    const featured = movies.filter(m => m.featured);
    currentSlide = (currentSlide + 1) % featured.length;
    updateSlider();
}

function prevSlide() {
    const featured = movies.filter(m => m.featured);
    currentSlide = (currentSlide - 1 + featured.length) % featured.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    document.querySelectorAll('.hero-slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Carousels
function initCarousels() {
    const trending = movies.filter(m => m.rating >= 8).slice(0, 10);
    const moviesList = movies.filter(m => m.type === 'movie');
    const seriesList = movies.filter(m => m.type === 'series');
    
    renderCarousel('trendingSection', '🔥 Trending Now', trending);
    renderCarousel('moviesSection', '🎬 Popular Movies', moviesList);
    renderCarousel('seriesSection', '📺 TV Series', seriesList);
}

function renderCarousel(containerId, title, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="carousel-header">
            <h2 class="carousel-title">${title}</h2>
            <div class="carousel-controls">
                <button class="carousel-btn" onclick="scrollCarousel('${containerId}', -1)">‹</button>
                <button class="carousel-btn" onclick="scrollCarousel('${containerId}', 1)">›</button>
            </div>
        </div>
        <div class="carousel-track" id="${containerId}Track">
            ${items.map(movie => createMovieCard(movie)).join('')}
        </div>
    `;
}

function scrollCarousel(containerId, direction) {
    const track = document.getElementById(containerId + 'Track');
    track.scrollBy({ left: direction * 400, behavior: 'smooth' });
}

function createMovieCard(movie) {
    const inWatchlist = watchlist.includes(movie.id);
    return `
        <div class="movie-card" onclick="showDetail(${movie.id})">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="poster-overlay">
                    <div class="play-button">▶</div>
                </div>
                <div class="movie-rating">
                    <span class="star">⭐</span> ${movie.rating}
                </div>
                <div class="movie-type">${movie.type}</div>
                <button class="watchlist-btn ${inWatchlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWatchlist(${movie.id})">
                    ${inWatchlist ? '✓' : '+'}
                </button>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">${movie.year} • ${movie.genre[0]}</div>
            </div>
        </div>
    `;
}

// Browse Page
function renderBrowseGrid() {
    filterMovies();
}

function filterMovies() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const type = document.getElementById('typeFilter').value;
    const genre = document.getElementById('genreFilter').value;
    const sort = document.getElementById('sortFilter').value;
    
    let filtered = movies.filter(movie => {
        const matchSearch = movie.title.toLowerCase().includes(search);
        const matchType = type === 'all' || movie.type === type;
        const matchGenre = genre === 'all' || movie.genre.includes(genre);
        return matchSearch && matchType && matchGenre;
    });
    
    filtered.sort((a, b) => {
        if (sort === 'rating') return b.rating - a.rating;
        if (sort === 'year') return b.year - a.year;
        if (sort === 'title') return a.title.localeCompare(b.title);
        return 0;
    });
    
    document.getElementById('resultsCount').textContent = `${filtered.length} results`;
    document.getElementById('browseGrid').innerHTML = filtered.map(createMovieCard).join('');
}

// Watchlist
function toggleWatchlist(movieId) {
    const index = watchlist.indexOf(movieId);
    if (index > -1) {
        watchlist.splice(index, 1);
    } else {
        watchlist.push(movieId);
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    
    // Refresh displays
    initCarousels();
    renderBrowseGrid();
    renderWatchlist();
    
    if (currentMovieId === movieId) {
        showDetail(movieId);
    }
}

function renderWatchlist() {
    const grid = document.getElementById('watchlistGrid');
    const empty = document.getElementById('emptyWatchlist');
    const count = document.getElementById('watchlistCount');
    
    const watchlistMovies = movies.filter(m => watchlist.includes(m.id));
    count.textContent = `${watchlistMovies.length} items`;
    
    if (watchlistMovies.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        empty.style.display = 'none';
        grid.innerHTML = watchlistMovies.map(createMovieCard).join('');
    }
}

// Movie Detail
function showDetail(movieId) {
    currentMovieId = movieId;
    const movie = movies.find(m => m.id === movieId);
    const movieReviews = reviews.filter(r => r.movieId === movieId);
    const inWatchlist = watchlist.includes(movieId);
    
    const avgRating = movieReviews.length 
        ? (movieReviews.reduce((sum, r) => sum + r.rating, 0) / movieReviews.length).toFixed(1)
        : movie.rating;
    
    // Set hero background
    document.getElementById('detailHero').style.backgroundImage = `url('${movie.backdrop}')`;
    
    // Render content
    document.getElementById('detailContent').innerHTML = `
        <button class="back-btn" onclick="showPage('home')">Back</button>
        <div class="detail-main">
            <div class="detail-poster">
                <img src="${movie.poster}" alt="${movie.title}">
            </div>
            <div class="detail-info">
                <div class="detail-badges">
                    <span class="badge badge-type">${movie.type}</span>
                    <span>${movie.year}</span>
                    <span>🕐 ${movie.duration}</span>
                </div>
                <h1 class="detail-title">${movie.title}</h1>
                <div class="detail-genres">
                    ${movie.genre.map(g => `<span class="genre-badge">${g}</span>`).join('')}
                </div>
                <div class="detail-rating">
                    <div class="rating-circle"><span class="star">⭐</span></div>
                    <div>
                        <div class="rating-value">${avgRating}</div>
                        <div class="rating-count">${movieReviews.length} reviews</div>
                    </div>
                </div>
                <p class="detail-description">${movie.description}</p>
                <div class="detail-buttons">
                    <button class="btn btn-primary btn-lg">▶ Watch Now
                    </button>
                    <button class="btn btn-secondary btn-lg ${inWatchlist ? 'active' : ''}" onclick="toggleWatchlist(${movie.id})">
                        ${inWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                    </button>
                </div>
                <div class="detail-crew">
                    <div class="crew-item">
                        <label>Director</label>
                        <span>${movie.director}</span>
                    </div>
                    <div class="crew-item">
                        <label>Cast</label>
                        <span>${movie.cast.slice(0, 3).join(', ')}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="reviews-section">
            <div class="reviews-header">
                <h2>Reviews (${movieReviews.length})</h2>
            </div>
            <div class="reviews-grid">
                <div class="reviews-list">
                    ${movieReviews.length > 0 
                        ? movieReviews.map(r => `
                            <div class="review-card">
                                <div class="review-header">
                                    <div class="review-avatar">${r.userName[0]}</div>
                                    <div class="review-meta">
                                        <div class="review-author">${r.userName}</div>
                                        <div class="review-date">${new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                                    </div>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span>${r.rating}</span>
                                    </div>
                                </div>
                                ${r.title ? `<div class="review-title">${r.title}</div>` : ''}
                                <p class="review-content">${r.content}</p>
                                <button class="helpful-btn" onclick="markHelpful(${r.id})">
                                    👍 Helpful (${r.helpful})
                                </button>
                            </div>
                        `).join('')
                        : '<div class="empty-state"><p>No reviews yet. Be the first to review!</p></div>'
                    }
                </div>
                <div class="review-form-card">
                    <h3>Write a Review</h3>
                    <div class="rating-input">
                        <label>Your Rating</label>
                        <div class="stars" id="detailRatingStars">
                            ${[1,2,3,4,5,6,7,8,9,10].map(i => `<button onclick="setRating(${i})">⭐</button>`).join('')}
                        </div>
                        <span id="detailRatingValue">${currentRating}/10</span>
                    </div>
                    <input type="text" id="detailReviewTitle" placeholder="Review title (optional)">
                    <textarea id="detailReviewContent" placeholder="Share your thoughts..."></textarea>
                    <button class="btn btn-primary btn-full" onclick="submitDetailReview()">Submit Review</button>
                </div>
            </div>
        </div>
    `;
    
    showPage('detail');
    updateDetailRatingDisplay();
}

function setRating(rating) {
    currentRating = rating;
    updateDetailRatingDisplay();
}

function updateDetailRatingDisplay() {
    const stars = document.querySelectorAll('#detailRatingStars button');
    stars.forEach((star, i) => {
        star.classList.toggle('active', i < currentRating);
    });
    const ratingValue = document.getElementById('detailRatingValue');
    if (ratingValue) {
        ratingValue.textContent = `${currentRating}/10`;
    }
}

function submitDetailReview() {
    const title = document.getElementById('detailReviewTitle').value;
    const content = document.getElementById('detailReviewContent').value;
    
    if (currentRating === 0 || !content.trim()) {
        alert('Please add a rating and review content');
        return;
    }
    
    const newReview = {
        id: reviews.length + 1,
        movieId: currentMovieId,
        userName: 'Guest User',
        rating: currentRating,
        title: title,
        content: content,
        date: new Date().toISOString().split('T')[0],
        helpful: 0
    };
    
    reviews.push(newReview);
    currentRating = 0;
    showDetail(currentMovieId);
}

function markHelpful(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.helpful++;
        showDetail(currentMovieId);
    }
}

// Auth (Simulated)
function toggleAuth() {
    isLoggedIn = !isLoggedIn;
    document.getElementById('authBtnText').textContent = isLoggedIn ? 'Sign Out' : 'Sign In';
}

// Rating Stars for Modal
function initRatingStars() {
    const container = document.getElementById('ratingStars');
    if (!container) return;
    
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.textContent = '⭐';
        btn.onclick = () => {
            currentRating = i;
            updateRatingDisplay();
        };
        container.appendChild(btn);
    }
}

function updateRatingDisplay() {
    const stars = document.querySelectorAll('#ratingStars button');
    stars.forEach((star, i) => {
        star.classList.toggle('active', i < currentRating);
    });
    document.getElementById('ratingValue').textContent = `${currentRating}/10`;
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('active');
    currentRating = 0;
    updateRatingDisplay();
}

function submitReview(e) {
    e.preventDefault();
    const title = document.getElementById('reviewTitle').value;
    const content = document.getElementById('reviewContent').value;
    
    if (currentRating === 0 || !content.trim()) {
        alert('Please add a rating and review');
        return;
    }
    
    const newReview = {
        id: reviews.length + 1,
        movieId: currentMovieId,
        userName: 'Guest User',
        rating: currentRating,
        title: title,
        content: content,
        date: new Date().toISOString().split('T')[0],
        helpful: 0
    };
    
    reviews.push(newReview);
    closeReviewModal();
    showDetail(currentMovieId);
}

