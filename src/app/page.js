import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="pt-16">
        <div className="container mw-screen-xl">
          <div className="text-dark w-lg-50">
            <svg class="w-auto h-rem-16" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 500C0 223.858 223.858 0 500 0C776.142 0 1000 223.858 1000 500C1000 776.142 776.142 1000 500 1000C223.858 1000 0 776.142 0 500Z" fill="currentColor"></path>
              <path d="M200.586 392.877C181.963 360.623 193.015 319.379 225.269 300.757C257.524 282.135 298.767 293.186 317.39 325.44L494.411 632.051C513.033 664.305 501.982 705.549 469.728 724.171C437.473 742.793 396.229 731.742 377.607 699.488L200.586 392.877Z" fill="white"></path>
              <path d="M453.948 392.877C435.326 360.623 446.377 319.379 478.631 300.757C510.886 282.135 552.129 293.186 570.752 325.44L747.773 632.051C766.395 664.305 755.344 705.549 723.09 724.171C690.835 742.793 649.591 731.742 630.969 699.488L453.948 392.877Z" fill="white"></path>
              <path d="M673.592 334.475C673.592 297.231 703.784 267.039 741.029 267.039C778.273 267.039 808.465 297.231 808.465 334.475C808.465 371.72 778.273 401.912 741.029 401.912C703.784 401.912 673.592 371.72 673.592 334.475Z" fill="white"></path>
            </svg>
            <p className="lead mt-8 text-muted">
              Get your new web design project started with these amazing components, and copy-paste elements into your existing projects to give them a creative boost.
            </p>
          </div>
        </div>
      </div>
      <section className="py-16">
        <div className="container mw-screen-xl">
         
          <div className="row row-cols-1 row-cols-lg-3 gy-10 g-lg-10 gy-lg-16">
            <div className="col">
              <div className="position-relative">
                <div className="bg-body-secondary bg-opacity-50 border shadow-soft-2 rounded-3 mb-6">
                  <img
                    alt="..."
                    loading="lazy"
                    width={800}
                    height={800}
                    decoding="async"
                    data-nimg={1}
                    src="/img/ui/components.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <a
                    className="d-block h5 text-secondary-hover fw-semibold stretched-link"
                    href="/library/components"
                  >
                    Components
                  </a>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill ms-auto">
                    296 snippets
                  </span>
                </div>
                <p className="text-sm text-muted">
                  Explore diverse elements like buttons, cards, pricing tables,
                  dropdowns, and more.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <div className="bg-body-secondary bg-opacity-50 border shadow-soft-2 rounded-3 mb-6">
                  <Image
                    alt="..."
                    width={800}
                    height={800}
                    src="/img/ui/forms.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <a
                    className="d-block h5 text-secondary-hover fw-semibold stretched-link"
                    href="https://webpixels.io/library/forms"
                    target="_blank"
                  >
                    Forms
                  </a>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill ms-auto">
                    57 snippets
                  </span>
                </div>
                <p className="text-sm text-muted">
                  Wide range of elements including inputs, checkboxes, file uploaders,
                  and more.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <div className="bg-body-secondary bg-opacity-50 border shadow-soft-2 rounded-3 mb-6">
                  <img
                    alt="..."
                    loading="lazy"
                    width={800}
                    height={800}
                    decoding="async"
                    data-nimg={1}
                    src="/img/ui/sections.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <a
                    className="d-block h5 text-secondary-hover fw-semibold stretched-link"
                    href="/library/sections"
                  >
                    Sections
                  </a>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill ms-auto">
                    112 snippets
                  </span>
                </div>
                <p className="text-sm text-muted">
                  150+ sections including hero, about us, services, testimonials,
                  pricing, and more.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <div className="bg-body-secondary bg-opacity-50 border shadow-soft-2 rounded-3 mb-6">
                  <img
                    alt="..."
                    loading="lazy"
                    width={800}
                    height={800}
                    decoding="async"
                    data-nimg={1}
                    src="/img/ui/layouts.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <a
                    className="d-block h5 text-secondary-hover fw-semibold stretched-link"
                    href="/library/layouts"
                  >
                    Layouts
                  </a>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill ms-auto">
                    4 snippets
                  </span>
                </div>
                <p className="text-sm text-muted">
                  Responsive layouts, including grid systems, multi-column designs,
                  full-width, and more.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <div className="bg-body-secondary bg-opacity-50 border shadow-soft-2 rounded-3 mb-6">
                  <img
                    alt="..."
                    loading="lazy"
                    width={800}
                    height={800}
                    decoding="async"
                    data-nimg={1}
                    src="/img/ui/pages.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <a
                    className="d-block h5 text-secondary-hover fw-semibold stretched-link"
                    href="/library/pages"
                  >
                    Pages
                  </a>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill ms-auto">
                    21 snippets
                  </span>
                </div>
                <p className="text-sm text-muted">
                  Pre-built templates, including landing pages, dashboards,
                  e-commerce, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
