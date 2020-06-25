---
layout: single
title: How to setup a blog with Jekyll
description: "Jekyll: How to setup your blog with Jekyll."
author: Hoa
author_profile: false
excerpt: "Setting up a blog in Jekyll — helpful links and resources."
modified: 2019-11-12
category:
  - Jekyll
comments: true
header:
  image: /images/jekyll-logo-black-red-transparent.png
  caption: "Jekyll script by [GitHub](https://github.com/jekyll/brand)"
---
Writing is *rewriting*. Writing and editing come in iterative progression. If you want to focus on writing, [Jekyll](http://jekyllrb.com) is a good solution to keep a blog. *Jekyll* is “an open-source simple static site generator”. What that means is Jekyll converts plain text files from a computer into a website or blog. If you like writing in [Markdown](http://daringfireball.net/projects/markdown/), you will like a solution like Jekyll for blogging. Using Jekyll has some advantages over more complex systems. It is built for writing. You don’t need to log anywhere to access and change your content although you can also edit it through a GitHub account. But you can just as well write a text on your computer and let [Git](http://git-scm.com) mirrors it and build it, either on [GitHub](https://github.com) or on your own self hosted server. Git *“is a free and open source distributed version control system”*. Pushing revisions to Git is a convenient way to publish and review notes. Since Git keeps track of all changes, you can revert to any previous version at anytime. Using GitHub pages is free. Web hosting, traffic pikes, databases or downtimes are no longer a concern once your site is set up. Serving static files **is fast**. Another major advantage is security: there is no entry point to hack.

## Quick start
Requirements:  	
→	[Ruby](https://www.ruby-lang.org/en/downloads/)

→	[RubyGems](http://rubygems.org/pages/download)

→	Linux, Unix, or Mac OS X[^1]

→	[Git](http://git-scm.com)

[^1]: It works on Windows too.

### Install Jekyll on Mac OS X

Install Xcode from the AppStore: https://developer.apple.com/download/

First, make sure you have **Xcode Command Line Tools** installed.

Using the Terminal located in ```Applications/Utilities/Terminal```

{% highlight ruby %}
xcode-select --install
{% endhighlight %}

You can now use the command line to run the rest of the installation commands.

First install [Homebrew](https://brew.sh):

{% highlight ruby %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Homebrew is useful because it will manage the various packages installations. If you have Homebrew already, check for updates.

{% highlight ruby %}
brew update
{% endhighlight %}

Next, you need install Ruby. Your system might already have this, but we’ll be getting the latest version.

{% highlight ruby %}
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby (specific version)
rbenv install 2.5.1
rbenv global 2.5.1
ruby -v
{% endhighlight %}

Now, at last, you are ready to install Jekyll

{% highlight ruby %}
sudo gem install jekyll
{% endhighlight %}



{% highlight ruby %}
brew install ruby
{% endhighlight %}

Using the command line:
{% highlight ruby %}
$ gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
# => Now browse to http://localhost:4000
{% endhighlight %}

You can also use: ```jekyll build```

And, working with drafts: ```jekyll serve —drafts```


## Jekyll documentation

✑ [Jekyll repository on GitHub](https://github.com/jekyll/jekyll)

✑ Set up Git: [https://help.github.com/articles/set-up-git](https://help.github.com/articles/set-up-git "GitHub - Set up git")

✑ [Jekyll' structure](http://jekyllrb.com/docs/structure/ "Jekyll' structure")

✑ [GitHub](https://github.com/ "GitHub")

✑ [Ruby Gems](http://guides.rubygems.org "Ruby Gems")

✑ [Kramdown](http://kramdown.rubyforge.org "Kramdown")


## Using Jekyll with GitHub Pages:

![Jekyll Pages](Jekyll_Pages.png)

☆ [GitHub Pages](http://pages.github.com "Pages - GitHub") are powered by Jekyll so you can deploy a site from a [GitHub](https://github.com/ "GitHub") directory and host it for free.

☆ [GitHub: Using Jekyll with pages](https://help.github.com/articles/using-jekyll-with-pages "GitHub: Using Jekyll with pages") — Pages help & how-to.

☆ [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-1-create-a-local-repository-for-your-jekyll-site)

## Editing remotely
[Prose](https://prose.io) — Prose is a simple content editor for GitHub designed for managing websites. Useful to edit your Jekyll site from any computer, work in team etc.

There are other services like [Netlify](https://www.netlify.com) and [cloudcannon](https://cloudcannon.com) that integrates Jekyll and extend its power.

## Jekyll themes:

→ [Minima](https://github.com/jekyll/minima) is the current default Jekyll theme

→  [https://jekyllthemes.dev]() A collection of free Jekyll themes

→ A handful of [Jekyll Themes](http://jekyllthemes.org/) compiled by By [Shu Uesugi](http://chibicode.com)

→ Dr Jekyll's themes — [http://drjekyllthemes.github.io](http://drjekyllthemes.github.io) is a free static website theme directory

→ [Alembic](https://alembic.darn.es), is a Jekyll boilerplate theme designed to be a starting point for any Jekyll website

### Learning Jekyll

✑ [Getting Started with Jekyll](https://scotch.io/tutorials/getting-started-with-jekyll-plus-a-free-bootstrap-3-starter-theme) by Nicholas Cerminara (@nickforthought). This is one of the most thorough article on how to set up a Jekyll site in a few comprehensive steps.

✑ [http://jekyll.tips/](http://jekyll.tips/) — Step by step tutorials and screencasts covering everything you need to know about Jekyll.

✑ Jekyll Talk [http://talk.jekyllrb.com](http://talk.jekyllrb.com) — A place for the Jekyll community to ask questions, get help, and share their wonderful creations!

✑ [An Introduction to jekyll](https://www.andrewmunsell.com/tutorials/jekyll-by-example) by [Jérôme Coupé](https://www.webstoemp.com "Jérôme Coupé - Webstoemp")

✑ Add a portfolio to your jekyll site: [https://github.com/hez/jekyll.portfolio](https://github.com/hez/jekyll.portfolio "hez - Jekyll - add a portfolio repository")

✑ Jekyll SEO: Brett Hardin's [Jekyll and seo optimization](http://bretthard.in/2012/06/jekyll-and-seo-optimization/ "jekyll and seo optimization")

## Jekyll or WordPress?
Jekyll is gaining more and more attention. Once set up, maintaining a Jekyll blog is convenient and hassle-free. Simplicity, focus on writing and the speed advantage Jekyll provides make it an ideal tool for blogs. There are a lot of articles around about people converting their WordPress blogs to Jekyll. Or glossing about going back to WordPress and why. In the end what you use doesn’t matter. These are both fantastic tools. Their beauty is that once you adapt them to your needs, they will remain behind the scene. The important thing is what you make out of them.

## Other static site generators
Here is a list of more [Open-Source Static Site Generators](http://www.staticgen.com), complete with stat usage and info.

***

## Credits for this site

[silentcomics.com](/) runs on Jekyll. The theme for this site is based on [minimal mistakes](https://github.com/mmistakes/minimal-mistakes) by [Michael Rose](http://mademistakes.com). Read the [Minimal Mistakes theme setup](http://mmistakes.github.io/minimal-mistakes/theme-setup/ "Minimal Mistakes Jekyll theme") for thorough documentation and comprehensive install how-to. Thanks to [@mmistakes](https://twitter.com/mmistakes) for sharing his excellent work — you can find more open source themes by Michael Rose [here](http://mademistakes.com/work/jekyll-themes/) and [on GitHub](https://github.com/mmistakes).
{: .notice}

## Further reads

###### Tom Preston-Werner[(@mojombo)](https://twitter.com/mojombo). “Blogging Like a Hacker.” [http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html).

###### Young Hahn, Development Seed. “Using Jekyll and GitHub Pages For Our Site.” [http://developmentseed.org/blog/2011/09/09/jekyll-github-pages/](http://developmentseed.org/blog/2011/09/09/jekyll-github-pages/) — a thorough article  about how Jekyll works.

###### Mathias Biilmann Christensen, Smashing Magazine “Why Static Website Generators Are The Next Big Thing.” (November 2015) [http://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/](http://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/)—[The same article, discussed on HN](https://news.ycombinator.com/item?id=10491873)
