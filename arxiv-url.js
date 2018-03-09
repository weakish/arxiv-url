let current_domain = window.location.hostname;
if (current_domain !== "arxiv.org") {
    let arxiv_pdf_pattern = /http(s)?:\/\/[www.]?arxiv.org\/pdf\//;
    let anchors = document.getElementsByTagName('a');
    for (let anchor of anchors) {
        let href_ = anchor.href;
        if (href_.search(arxiv_pdf_pattern) != -1) {
            href_ = href_.replace(".pdf", "");
            href_ = href_.replace("arxiv.org/pdf/", "arxiv.org/abs/");
            anchor.href = href_;
        }
    }
}

