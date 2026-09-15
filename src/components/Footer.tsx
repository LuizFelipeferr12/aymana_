export function Footer() {
  return (
    <footer className="bg-white border-t border-accent mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 text-center sm:text-left">
          
          <div>
            <h3 className="font-serif font-bold text-xl text-primary mb-4">AyManá</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Confeitaria artesanal adoçando dias com o amor de Deus. Feito com o coração para o seu momento especial.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>Terça a Sábado: 10h às 19h</li>
              <li>Domingo: 10h às 15h</li>
              <li>Segunda: Fechado</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-4">Pagamento & Contato</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>Aceitamos Pix e Cartões</li>
              <li>WhatsApp: (11) 9999-9999</li>
              <li>
                <a href="#" className="text-primary hover:underline transition-all">
                  @aymanaconfeitaria
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-accent text-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} AyManá Confeitaria Artesanal. Deus abençoe seu dia!
          </p>
        </div>
      </div>
    </footer>
  );
}
