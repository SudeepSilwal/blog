export const projects = [
  {
    id: 5,
    title: 'RemoveBG',
    draft: false,
    imageAlt: 'RemoveBG free online AI background remover',
    slug: 'removebg',
    excerpt: 'A free online background remover that uses an image-processing API to remove backgrounds from JPG, PNG, and WebP images and generate transparent PNGs.',
    description:"A free online background remover that uses an image-processing API to remove backgrounds from JPG, PNG, and WebP images and generate transparent PNGs.",
    content: `
      <p>
        RemoveBG is a free online background removal tool that makes it easy
        to remove backgrounds from images directly in a web browser. Users can
        upload JPG, PNG, or WebP images and receive a transparent PNG with the
        background removed.
      </p>

      <p>
        I built RemoveBG to create a simple and accessible image-processing
        experience without requiring users to install desktop software or use
        complicated image-editing tools.
      </p>

      <h2>Why I Built RemoveBG</h2>

      <p>
        Removing an image background is useful for product photography,
        e-commerce images, profile pictures, social media content,
        presentations, thumbnails, and many other creative projects.
      </p>

      <p>
        The goal of RemoveBG is to keep the process simple: upload an image,
        process it through the background-removal API, and download the
        resulting transparent PNG.
      </p>

      <h2>Key Features</h2>

      <ul class="check-list">
        <li>Free online background removal</li>
        <li>JPG image support</li>
        <li>PNG image support</li>
        <li>WebP image support</li>
        <li>Transparent PNG output</li>
        <li>Simple image upload interface</li>
        <li>Responsive design for desktop and mobile</li>
        <li>No desktop software installation required</li>
      </ul>

      <h2>How It Works</h2>

      <p>
        The RemoveBG website provides the frontend interface where users
        select or upload an image. The image is then sent to a dedicated
        background-removal API for processing.
      </p>

      <p>
        The API processes the image using available background-removal
        providers. Once processing is complete, the resulting transparent
        PNG is returned to the frontend so the user can download it.
      </p>

      <div class="article-highlight">
        Upload an image, remove its background, and download a transparent PNG
        without installing image-editing software.
      </div>

      <h2>Project Architecture</h2>

      <p>
        RemoveBG is divided into a lightweight frontend and a separate
        background-removal API. This separation keeps the frontend simple
        while allowing the image-processing backend to use multiple
        providers.
      </p>

      <pre><code>User
  ↓
RemoveBG Web App
  ↓
Background Removal API
  ↓
Background Removal Providers
  ↓
Transparent PNG
  ↓
Download</code></pre>

      <h2>Technologies Used</h2>

      <ul class="arrow-list">
        <li>HTML for the application structure</li>
        <li>CSS for responsive styling and the user interface</li>
        <li>JavaScript for image upload and application logic</li>
        <li>Cloudflare Workers for frontend deployment</li>
        <li>Cloudflare Static Assets for serving the website</li>
        <li>REST API for communication with the image-processing backend</li>
      </ul>

      <h2>Cloudflare Deployment</h2>

      <p>
        The RemoveBG frontend is deployed using Cloudflare Workers Static
        Assets. The production files are stored in the project's
        <code>dist</code> directory and deployed through Cloudflare.
      </p>

      <p>
        The application is available through the custom domain
        <strong>removebg.sudeepsilwal.com.np</strong>.
      </p>

      <h2>Background Removal API</h2>

      <p>
        The frontend communicates with a dedicated background-removal API
        rather than exposing third-party provider credentials in the browser.
        This keeps API credentials on the server and allows the backend to
        manage different image-processing providers.
      </p>

      <p>
        The API can use multiple providers and select an available provider
        for processing. This architecture improves reliability compared with
        depending on a single external service.
      </p>

      <h2>SEO Implementation</h2>

      <p>
        I also implemented technical SEO so the RemoveBG website can be
        properly discovered and understood by search engines.
      </p>

      <ul class="check-list">
        <li>Unique title and meta description</li>
        <li>Canonical URL</li>
        <li>Open Graph metadata</li>
        <li>Twitter/X metadata</li>
        <li>XML sitemap</li>
        <li>robots.txt</li>
        <li>JSON-LD structured data</li>
        <li>Semantic HTML structure</li>
        <li>Privacy Policy page</li>
        <li>Terms of Service page</li>
      </ul>

      <h2>Performance</h2>

      <p>
        The frontend is intentionally lightweight and built with standard
        HTML, CSS, and JavaScript. This avoids the overhead of a large
        client-side framework for the core image-upload experience.
      </p>

      <p>
        Cloudflare's global infrastructure is used to serve the static
        frontend, providing a fast delivery layer for users.
      </p>

      <h2>Challenges & Solutions</h2>

      <p>
        One challenge was creating a reliable background-removal workflow
        while keeping third-party API credentials secure. Separating the
        frontend from the backend API allows sensitive credentials to remain
        on the server.
      </p>

      <p>
        Another challenge was making the application simple enough for users
        who only need one task: removing an image background. The interface
        therefore focuses on the upload, processing, preview, and download
        workflow.
      </p>

      <h2>Future Improvements</h2>

      <ul class="arrow-list">
        <li>Drag-and-drop image uploads</li>
        <li>Batch background removal</li>
        <li>Additional image formats</li>
        <li>Background replacement</li>
        <li>Image compression options</li>
        <li>Improved processing progress indicators</li>
        <li>Additional background-removal providers</li>
        <li>Bot and abuse protection with Cloudflare Turnstile</li>
      </ul>

      <h2>Final Thoughts</h2>

      <p>
        RemoveBG is an ongoing project focused on making AI-powered image
        background removal simple and accessible. It combines a lightweight
        frontend, a dedicated image-processing API, and Cloudflare
        infrastructure into a practical web-based tool.
      </p>
    `,
    category: 'AI & Machine Learning',
    tags: [
      'AI',
      'Background Remover',
      'Remove Background',
      'Image Processing',
      'Image Editing',
      'Cloudflare Workers',
      'JavaScript',
      'REST API',
      'Web Development',
    ],
    date: '2026-09-10',
    readingTime: '7 min read',
    image: 'https://res.cloudinary.com/dqfqxlysk/image/upload/f_auto,q_auto,w_1200/v1789015157/project-image.png',
    github: 'https://github.com/SudeepSilwal/bg-remover',
    demo: 'https://removebg.sudeepsilwal.com.np/',
    featured: true,
  },
]