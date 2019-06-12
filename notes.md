# What is accessibility?

## At its core, an accessible web is:
- Navigable
- Comprehendible

## Facts:
- According to the CDC about 11% of the adult US population is visually impaired in some way.
  - 36,000,000 people in the US.
  - That's about the same number of people who are left-handed.
  - That's almost the entire population of California.
  - 2x the number of total visitors to Disney World each year.
- According to the CDC about 15% of the adult US population lives with a motor impairment.
  - Thats about 50,000,000 people in the US.
  - In other words, they could all fill Yankee Stadium 1000 times.
  - That's about the same number of people who regret the name they gave their child. (Insert joke about woman named Isis.)
- It's estimated that about 20% of people will require the use of some kind of assistive technology.

## Why should we make the web accessible?
- Persons with disabilities are considered a protected class.
- Failure to comply with accessibility compliance laws (ADA etc.) opens governments and companies to legal liabilities.
- It's the right thing to do.

Your user might not have a mouse.
Your user might not be able to see color.
Your user might not have the cultural background required to recognize icons.
Your user may not have a full keyboard.

Don't try to override the browser's default behavior.
Don't be unexpected.
Correctly used, HTML is accessible _by default_.
Your website can be technically ADA compliant, but still be difficult to use for persons with disabilities.

# Semantic HTML
- HTML elements have semantic meanings.
- Don't use elements for things other than their intended purpose.
- The relationships between elements matters.
- Don't use generic elements (div, span) when a semantic element can be used (section, p)
- Notify users of changes to the page.

# Working contexts
- The user should be able to understand where they are on a page at all times.
- When creating a new "context", like a modal dialog, or a dropdown, navigation should be restricted to that context.
