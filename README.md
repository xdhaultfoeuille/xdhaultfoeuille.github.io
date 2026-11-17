# Academic Website Starter — GitHub Pages

A small academic research site in the spirit of dviviano.github.io. No Jekyll, no dependencies, no build step.

## 1. Customize

* In all six `.html` files, replace `Firstname Lastname`, `Economics · University / Research Institute`, and `your.email@institution.edu` with your information (GitHub's search-and-replace, or a text editor).
* In `index.html`, update your biography and research interests.
* In `research.html`, replace the sample paper listings with your own publications. Edit or duplicate an `<article class="paper"> ... </article>` block for each paper.
* In `teaching.html`, `presentations.html`, and `software.html`, add your materials.
* Put your own image in `assets/photo.jpg` and replace `assets/portrait.svg` with `assets/photo.jpg` in all `.html` files.
* Edit `cv.html` with your appointments and education. To add your CV PDF, put it at `assets/cv.pdf` and insert a PDF link into `cv.html`.
* Change the colors in `style.css` (`:root` variables at the top).

## 2. Publish on GitHub Pages

1. Sign in at https://github.com/.
2. Create a **public** repository named exactly `<your-github-username>.github.io`.
3. On the repository page, choose **Add file → Upload files**.
4. **Unzip** the supplied archive locally, then upload its **contents** (all `.html`, `.css`, `.js`, plus the `assets` folder), not the ZIP file itself or a top-level `academic-site` wrapper folder. Verify `index.html` is at the root of the repository.
5. Commit changes.
6. Open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch **main**, folder **/(root)**, and Save.
7. Your page will be at `https://<your-github-username>.github.io/` (deployment may take a few minutes).

You can edit files directly on GitHub and commit changes. Updates will republish automatically.

## Structure

- `index.html`: home / about
- `cv.html`: curriculum vitae (optional PDF link)
- `research.html`: working papers & publications, interactive abstract toggle
- `teaching.html`: teaching
- `presentations.html`: seminar slides
- `software.html`: software
- `style.css`: responsive styling
- `script.js`: research abstracts toggle
- `assets/`: photo, CV and favicon

This is an independent template rather than a copy of another person's site.
