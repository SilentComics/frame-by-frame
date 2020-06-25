---
layout: single
title: Create a directory-tree with the command-line
description: "Generate a hierarchical list of your directory files with Tree."
excerpt: "Automate your README, table of content or documentation with a tree directory structure."
author: Hoa
author_profile: false
modified: 2020-01-09
category:
  - tools
tag:
  - Markdown
comments: true
header:
  image: /images/Terminal_Tree.png
  og_image: /images/fatal-trope-cover.jpg
  caption: Tree — command line screenshot
---

Update 2020: see also [Broot](https://dystroy.org/broot/)
{: .notice}

When you write documentation for your project or site, say a README Table of Content, you may need something like [Tree](http://mama.indstate.edu/users/ice/tree/ "Tree") to generate a directory structure for you.
Tree will display a list of directories as trees (with optional color/HTML output) automagically.

If you are a Mac user, you can use ```Tree``` in the command line.

If you don't already have [Homebrew](https://brew.sh) on your machine, install it first.

Then in the command line, simply run

{% highlight text %}
brew install tree
{% endhighlight %}

then you can open a new window

{% highlight text %}
CD your-project
{% endhighlight %}

Then run

{% highlight text %}
	tree
{% endhighlight %}

It will output a nice directory tree within the terminal window that you can just paste into your documentation.

{% highlight text %}
Example Jekyll Theme folder/
├── CNAME
├── LICENSE.txt
├── README.md
├── _config.yml
├── _data
│   ├── authors.yml
│   ├── comments
│   │   ├── a-post-with-comment
│   │   │   └── comment-1.yml
│   ├── navigation.yml
│   └── ui-text.yml
├── _drafts
│   ├── something-something.md
│   ├── sample-post.md
│   └── theme-setup.md
├── _includes
│   ├── comment.html
│   ├── comments-providers
│   │   ├── custom.html
│   │   ├── scripts.html
│   │   └── staticman.html
│   ├── comments.html
│   ├── footer.html
│   ├── head.html
│   └── scripts.html
├── etc.

{% endhighlight %}

If you are using Markdown, just surround this code with triple backticks[^1] to get the same output.
{% highlight text %}
```
├── CNAME
├── Gemfile
├── Gemfile.lock
├── LICENSE
├── README.md
├── ...
```
{% endhighlight %}

[^1]: see the markdown docs: [https://daringfireball.net/projects/markdown/syntax#code](https://daringfireball.net/projects/markdown/syntax#code)

## Other methods

Although using Tree in the command-line interface seems easier for me here are some other methods to the same end:

☞ [Directory tree plugin](https://www.npmjs.com/package/markdown-magic-directory-tree) adds directory tree to markdown files via markdown-magic.
→ [Directory tree plugin GitHub repo](https://github.com/camacho/markdown-magic-directory-tree). What's nice is that it lets you control your directory structure depth and which folder or file you choose to ignore.

☞ [md-file-tree](https://www.npmjs.com/package/md-file-tree) generates markdown list of all the files in a directory.
→ [md-file-tree GitHub repo](https://github.com/michalbe/md-file-tree). Its Markdown output looks slightly different

☞ [mddir](https://www.npmjs.com/package/mddir) Mddir generates a markdown file/folder structure for readme files
→ [mddir GitHub repo](https://github.com/JohnByrneRepo/mddir). Again the output is different.

☞ If you are using [Atom](https://atom.io), there is also [ASCII Tree](https://atom.io/packages/ascii-tree), a package to generate ASCII trees to visualize file/folder structure.

☞ If you prefer to generate your directory manually, you can use Shawn Chin's [interactive tree builder](http://jsfiddle.net/WjAk9/7/embedded/result/).


References: [Tree](http://mama.indstate.edu/users/ice/tree/ "Tree"), [Homebrew Formulas](https://formulae.brew.sh/formula/tree)
{: .notice}
