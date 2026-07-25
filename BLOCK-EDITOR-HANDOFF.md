# Enviar homepage block handoff

The homepage stays in WordPress and should be updated in the block editor. No
homepage template is supplied by this child theme.

Apply the following classes in each block's **Advanced > Additional CSS class(es)**
field. The theme stylesheet provides the responsive presentation.

| Section | Wrapper class | Inner blocks |
| --- | --- | --- |
| Hero | `enviar-hero` | `enviar-hero-eyebrow`, `enviar-hero-title`, `enviar-hero-copy`, `enviar-hero-actions`, `enviar-hero-primary`, `enviar-hero-secondary`, `enviar-hero-trust`, `enviar-hero-product` |
| Value strip | `enviar-value-strip` | `enviar-value-item` on each of four items |
| Platform | `enviar-section` and ID `platform` | `enviar-eyebrow`, `enviar-feature-grid`, `enviar-feature-card`, `enviar-feature-icon` |
| Solutions | `enviar-section enviar-section--surface` and ID `solutions` | `enviar-solutions`, `enviar-solution-row` |
| How it works | `enviar-section` and ID `how-it-works` | `enviar-process`, `enviar-process-step` |
| About | `enviar-section enviar-section--surface` and ID `about` | `enviar-eyebrow` |
| Contact | `enviar-section` and ID `contact` | `enviar-contact-form` on the SureForms wrapper |

Use the supplied `assets/images/tuma-dashboard.png` inside an `enviar-hero-product`
or `enviar-product-frame` block. Give it the alt text: `Tuma logistics dashboard`.

Set the primary menu items to `#platform`, `#solutions`, `#how-it-works`, `#about`,
and `#contact`; set the header button to `#contact` with the label `Request a demo`.
Build the request form using SureForms (or the existing form plugin), including its
own validation, success state, and spam protection.
