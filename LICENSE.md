# License

This project is two things with two licenses.

## The engine (code)

`index.html` (the scoring engine and UI) and everything in `scripts/` are licensed
under the **MIT License**:

> Copyright (c) 2026 the Master Index Workbench contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## The dataset

The compiled dataset (`dataset.js`, `dataset.csv`) is licensed under
**[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)**
(Attribution–NonCommercial–ShareAlike).

Why not something more permissive: several upstream sources publish their data
under NC/SA terms (the WHO Ambient Air Quality Database is CC BY-NC-SA 3.0 IGO;
Ookla Open Data is CC BY-NC-SA 4.0), and we cannot grant more rights than we
were given. The compilation license is therefore the most restrictive common
denominator.

**Per-value terms**: every value's own source and license is recorded in the
`provenance` block of `dataset.js` (and the `source` column of `dataset.csv`).
Some sources have additional terms (e.g. Numbeo permits personal/academic reuse
with a link back; Wikipedia content is CC BY-SA). If you plan commercial reuse,
check the provenance of the specific measures you need — many of them
(OECD, World Bank, UN, Eurostat, national statistics) are more permissive than
the compilation license.

**Attribution**: cite as described in `CITATION.cff`, and preserve the
per-value source attributions when redistributing the data.
