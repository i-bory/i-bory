import { useNavigate } from "react-router-dom";

function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (!element) return false;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return true;
}

function waitForElement(id: string, timeout = 3000): Promise<boolean> {
  return new Promise((resolve) => {
    const start = Date.now();

    const check = () => {
      if (document.getElementById(id)) {
        resolve(true);
        return;
      }

      if (Date.now() - start >= timeout) {
        resolve(false);
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
}

export function useNavigateAndScroll() {
  const navigate = useNavigate();

  return async (to: string) => {
    // External URL
    if (/^(https?:)?\/\//i.test(to)) {
      window.location.href = to;
      return;
    }

    const [path, hash] = to.split("#");

    // Same-page anchor: "#services"
    if (!path && hash) {
      scrollToElement(hash);
      return;
    }

    // Navigate to the route
    navigate(path || "/");

    // No anchor
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Wait until destination page has rendered
    const found = await waitForElement(hash);

    if (found) {
      scrollToElement(hash);
    }
  };
}

