const verificarEnderecoContemNomeRua = require('../src/verificarEnderecoContemNomeRua');

test('Deve identificar se o endereço contém nome de rua e número', () => {
    
    expect(verificarEnderecoContemNomeRua('Rua A, 123')).toBe(true);   
    expect(verificarEnderecoContemNomeRua('Av. Paulista, 1000')).toBe(true); 
    
    
    expect(verificarEnderecoContemNomeRua('123')).toBe(false);       
    expect(verificarEnderecoContemNomeRua('Rua, abc')).toBe(false);   
    expect(verificarEnderecoContemNomeRua('Rua A,')).toBe(false);     
});
