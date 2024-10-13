# @ohanaui/react

Polymorphic, type-safe DOM elements.

## Installation

```bash
npm install @ohanaui/react
```

## Rendering DOM Elements

Use `ohana` to render any DOM element:

```tsx
import { ohana } from "@ohanaui/react";

<ohana.div />;
```

## Typing Props

Use `OhanaProps` to define props including native DOM attributes and `asChild`:

```ts
import type { OhanaProps } from "@ohanaui/react";

type ComponentProps = OhanaProps<"div">;
```

## Example Use Case

The following example shows how Ohana may be used to enable polymorphism for a React component:

```tsx
import type { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";

type ComponentProps = OhanaProps<"div">;

const Component = ({ children, ...props }: ComponentProps) => (
  <ohana.div className="bg-black text-white" {...props}>
    {children}
  </ohana.div>
);

// renders as <div>
<Component>
  Children
</Component>

// renders as <a>
<Component asChild>
  <ohana.a href="/ohanaui">
    Children
  </ohana.a>
</Component>
```
