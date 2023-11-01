"use client";

// Library imports
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// CSS imports
import style from "@/app/notFound.module.scss";

export default function NotFound() {
  // Hooks
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, [router]);

  /////////////////////// Return Method ///////////////////////

  return (
    <div className={`${style.containerOfNotFoundPage} containerOfNotFoundPage`}>
      <h3 className={`${style.headingOfNotFoundPage} headingOfNotFoundPage`}>
        404
      </h3>
      <p className={`${style.paragraphOfNotFoundPage} paragraphOfNotFoundPage`}>
        This page could not be found.
      </p>
      <Link
        className={`${style.linkOfNotFoundPage} linkOfNotFoundPage`}
        href="/"
      >
        Back To Home
      </Link>
    </div>
  );
}
