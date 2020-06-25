# Description: Jekyll plugin to replace Markdown image syntax with HTML markup, written to work combined with Jekyll Picture Tag
# formerly '{% picture default \2 --alt \1 --link \2 %}'

Jekyll::Hooks.register :documents, :pre_render do |document, payload|
  docExt = document.extname.tr('.', '')
  # only process if we deal with a markdown file
  if payload['site']['markdown_ext'].include? docExt
    newContent = document.content.gsub(/!\[(.*)\]\(([^\)]+)\)(?:{:([^}]+)})*/, '{% picture default \2 --alt \1 --link /images/\2 %}')
    document.content.gsub! 'path: /', 'path: ' # you may optimise this a bit
    document.content = newContent
  end
end
