# MHTestSB

## 1. Given more time, were there other changes you would have liked to make?
- Taken code from api given that this data is likely to update regularly, which in turn could lead to 
- Use of Optional chaining
- Use of loading gif, error warnings
- Fix issue with format function from date-fns

## 2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.
Sematics:
- `<ul>` tags should really only contain `<li>`'s. Not divs.
- data - bankName comes back as 'Residential' - Very misleading as to what this is...so more labeling required

Accessibility:
- `<title>` was missing
- `<html>` lang attribute was missing

UI:
- The 'mortgage' button - make it more obvious that it's clickable (aside from pointer).
- Address could do with more information ie. Town.
- Decimal place consistency (sometimes .00, sometimes a round number)
