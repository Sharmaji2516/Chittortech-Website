const context = "/p>\r\n                                                     </div>\r\n                                                </div>\r\n                                            )}\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div className=\"modal-actions\">";

const endRegex = /(<\/div>\s*\)\}\s*<\/div>\s*<\/div>\s*)(<div className="modal-actions">)/;

console.log('Test match:', endRegex.test(context));
