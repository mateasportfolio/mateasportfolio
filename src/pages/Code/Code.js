import React from "react";
import "./style.css";

export const Code = () => {
  return (
    <div className="code-page">
      <div class="box">Netlyfi</div>
      <div class="box">
        Netlify lets you link a GitHub, GitLab, Bitbucket, or Azure DevOps
        repository to a site for continuous deployment. (Azure DevOps is
        currently in the beta stage.) Each time you push to your Git provider,
        Netlify runs a build with your tool of choice and deploys the result to
        our powerful CDN. Netlify operates through your GitHub repository and
        runs a build process to pre-render all your pages in static HTML.
        Netlify creates its own repository that pushes to Github and its own
        microservices. It then executes and distributes content across a wide
        CDN to deliver pre-built static websites to visitors
      </div>

      <h2>This is the code page </h2>
    </div>
  );
};
