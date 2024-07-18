import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    // Utilisez votre propre logique pour formatter le HTML si nécessaire
    // Par exemple, pour garder les sauts de ligne, vous pouvez remplacer les '\n' par '<br>'
    // Cela dépend de votre besoin spécifique de mise en forme
    const formattedHtml = value.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(formattedHtml);
  }
}
