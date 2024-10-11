# @ohanaui/react

Polymorphic, type-safe DOM elements.

## Installation

```bash
npm install @ohanaui/react
```

## Rendering DOM Elements

Use `ohanaui` to render any DOM element:

```tsx
import { ohanaui } from "@ohanaui/react";

<ohanaui.div />;
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
import { ohanaui } from "@ohanaui/react";

type ComponentProps = OhanaProps<"div">;

const Component = ({ children, ...props }: ComponentProps) => (
  <ohanaui.div className="bg-black text-white" {...props}>
    {children}
  </ohanaui.div>
);

// renders as <div>
<Component>
  Children
</Component>

// renders as <a>
<Component asChild>
  <ohanaui.a href="/ohanaui">
    Children
  </ohanaui.a>
</Component>
```
