export const stripHtml = (html: string): string => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

export const getFirstSentence = (text: string): string => {
  const sentence = text.split('. ')[0];
  return sentence.endsWith('.') ? sentence : sentence + '.';
};