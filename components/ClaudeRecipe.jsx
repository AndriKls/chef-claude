import React from "react";
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ markdown }) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
        </section>
    )
}